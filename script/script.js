document.addEventListener('DOMContentLoaded', function() {
    var pathName = window.location.pathname;
    if (pathName.includes('page.html')) {
        loadData();
    }
});
function loadData() {
    let usersArray = JSON.parse(localStorage.getItem('usersArray')) || [];
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');

        document.getElementById('exampleInputEmail1').value = usersArray[index].login;
        document.getElementById('exampleInputFullName1').value = usersArray[index].fullName;
        document.getElementById('exampleInputCountry1').value = usersArray[index].country;
        document.getElementById('exampleInputDate1').value = usersArray[index].birthdate;
        document.getElementById('name').innerText = usersArray[index].fullName;
        document.getElementById('h3').innerText = "Welcome " + usersArray[index].fullName;

}

function checkLogin2(login, password) {

    let usersArray = JSON.parse(localStorage.getItem('usersArray')) || [];
    let result = {
        success: false,
        index: -1
    };
    for (let i = 0; i < usersArray.length; i++) {
        if (login === usersArray[i].login && password === usersArray[i].password) {
            result.success = true;
            result.index = i;
            break; 
        }
    }
    return result;
}


function checkLogin() {
    let login = document.getElementById('exampleInputEmail1');
    let password = document.getElementById('exampleInputPassword1');
    
    let result = checkLogin2(login.value, password.value);
   
    if (result.success) 
        // window.location.href = "page.html";
        window.location.href = 'page.html?index=' + encodeURIComponent(result.index);
     else {
        alert('Authentication failed ' + login.value + ' ' + password.value);
    }

}

function register(event) {
    event.preventDefault();
    let login = document.getElementById('exampleInputEmail1');
    let password = document.getElementById('exampleInputPassword1');
    let fullName = document.getElementById('exampleInputFullName1');
    let country = document.getElementById('exampleInputCountry1');
    let date = document.getElementById('exampleInputDate1');
    let user = {
        login: login.value,
        password: password.value,
        fullName: fullName.value,
        country: country.value,
        birthdate: date.value
    }
    let usersArray2 = JSON.parse(localStorage.getItem('usersArray')) || [];
    usersArray2.push(user);
    localStorage.setItem('usersArray', JSON.stringify(usersArray2));
    window.location.href = 'index.html';
}

