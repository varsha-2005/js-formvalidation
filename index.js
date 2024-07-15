var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('pass');
var conformpassword = document.getElementById('conpass');

form.addEventListener('submit', (eve) => {
    eve.preventDefault();
    validate();
});

function validate() {
    var username1 = username.value.trim();
    var email1 = email.value.trim();
    var password1 = password.value.trim();
    var conpass1 = conformpassword.value.trim();

    if (username1 === '') {
        setError(username, 'Username is required!!!');
    } else {
        setSuccess(username);
    }

    if (email1 === '') {
        setError(email, 'Email is required!!!');
    } else if (!validateEmail(email1)) {
        setError(email, 'Enter in correct format!!!');
    } else {
        setSuccess(email);
    }

    if (password1 === '') {
        setError(password, 'Enter the password');
    } else if (password1.length < 6) {
        setError(password, 'Enter in the correct format');
    } else {
        setSuccess(password);
    }

    if (conpass1 === '') {
        setError(conformpassword, 'Enter the password');
    } else if (conpass1 !== password1) { 
        setError(conformpassword, 'Passwords do not match');
    } else {
        setSuccess(conformpassword);
    }
}

function setError(element, message) {
    var maing = element.parentElement;
    var errorm = maing.querySelector('.error');
    errorm.innerText = message; 
    maing.classList.add('error');
    maing.classList.remove('success');
}

function setSuccess(element) {
    var maing = element.parentElement;
    var errorm = maing.querySelector('.error');
    errorm.innerText = ''; 
    maing.classList.add('success');
    maing.classList.remove('error');
}

const validateEmail = (email) => {
    const regex = /^(\w+\.)*\w+@(\w+\.)+[A-Za-z]{2,}$/; 
    return regex.test(email);
}

