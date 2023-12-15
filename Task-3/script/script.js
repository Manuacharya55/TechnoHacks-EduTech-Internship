const submitForm = document.querySelector('.submit-form');
const username = document.querySelector('#username');
const userEmail = document.querySelector('#e-mail');
const createdPassword = document.querySelector('#password-created');
const confirmedPassword = document.querySelector('#confirm-password');

const usernamemsg = document.querySelector('.username-msg')
const emailmsg = document.querySelector('.email-msg');
const passwordmsg = document.querySelector('.password-msg');
const confirmpasswordmsg = document.querySelector('.confirmpassword-msg');

const usernameValidation = () => {
    const usernameText = username.value;
    if (usernameText.length >= 3 && usernameText != '') {
        usernamemsg.textContent = '';
        username.classList.remove('red');
    } else {
        usernamemsg.textContent = 'please enter a valid username';
        usernamemsg.style.color = 'red'
        username.classList.add('red');
    }
}

// email validation
const userEmailValidation = () => {
    const userEmailText = userEmail.value;

    if (userEmailText != '') {
        if (userEmailText.endsWith('@gmail.com') || userEmailText.endsWith('@outlook.com') || userEmailText.endsWith('@hotmail.com') || userEmailText.endsWith('@yahoo.com')) {
            emailmsg.textContent = '';
            userEmail.classList.remove('red');
        }
    } else {
        emailmsg.textContent = 'please enter a valid email';
        emailmsg.style.color = 'red'
        userEmail.classList.add('red');
        
    }
}


// password validation
const passwordValidation = () => {
    const userPasswordText = createdPassword.value;

    const validations = {
        uppercase: /[A-Z]/g.test(userPasswordText),
        lowercase: /[a-z]/g.test(userPasswordText),
        numeric: /[0-9]/g.test(userPasswordText),
        symbol: /[@#$%(){}]/g.test(userPasswordText),
    };

    const lengthError = 'Password should have at least 6 digits';
    const emptyError = 'Password should not be empty';
    const formatError = 'Password should meet the specified criteria';
    const symbolError = 'Password should contain one from @, #, $, %, (, ), {';

    if (userPasswordText !== '') {
        if (userPasswordText.length >= 6) {
            if (Object.values(validations).every(validation => validation)) {
                passwordmsg.textContent = '';
                passwordMatching(userPasswordText);
            } else {
                if (!validations.symbol) {
                    showValidationError(symbolError);
                } else if (!validations.numeric) {
                    showValidationError('Password should contain at least one number');
                } else if (!validations.lowercase) {
                    showValidationError('Password should contain at least one lowercase');
                } else if (!validations.uppercase) {
                    showValidationError('Password should contain at least one uppercase');
                }
            }
        } else {
            showValidationError(lengthError);
        }
    } else {
        showValidationError(emptyError);
        showValidationError('Password did not match', confirmpasswordmsg, confirmedPassword);
    }

    function showValidationError(message, element = passwordmsg, borderElement = null) {
        element.textContent = message;
        element.style.color = 'red';
        if (borderElement) {
            borderElement.style.border = '1px solid red';
        }
    }
};



// confirm password validation
const passwordMatching = (passwordGenerated) => {
    if (confirmedPassword.value === passwordGenerated) {
        confirmpasswordmsg.textContent = '';
        confirmedPassword.style.border = '1px solid #ccc'
    } else {
        confirmpasswordmsg.textContent = 'password did not match';
        confirmpasswordmsg.style.color = 'red'
        confirmedPassword.style.border = '1px solid red'
    }
}


submitForm.addEventListener('click', (e) => {
    e.preventDefault();
    usernameValidation();
    userEmailValidation();
    passwordValidation();
})