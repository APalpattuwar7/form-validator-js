const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

function checkLength(input, min, max) {
    if(input.value.length < 3) {
        showError(input, `${getFieldName(input)} must be greater than ${min} characters.`);
    } else if(input.value.length > max) {
        showError(input, `${input.id} must be less than ${max} characters.`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordLength(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match.');
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputElements = [username, email, password, password2];

    checkRequired(inputElements);
    checkLength(username, 3, 15);
    checkLength(email, 3, 15);
    checkPasswordLength(password, password2);
})
