/**
 * 
 * This global variable detects the input field with the id 'email-field'
 */

emailField = document.getElementById('email-field');

/**
 * 
 * This function removes the background image from the input field when the user enters text
 */

function removeEmailImg() {
        if (emailField.value.trim() !== '') {
                emailField.style.backgroundImage = 'none';
        }
}

/**
 * 
 * This function displays the background image if the input field is empty
 */

function restoreEmailImg() {
        if (emailField.value.trim() === '') {
                emailField.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/mail.svg)';
        }
}

/**
*
* EventListener activates the function removeEmailImg if the user inputs something in our input field 'input
*/

emailField.addEventListener('input', removeEmailImg);

/**
 *
 * The event listener activates the function restoreEmailImg when the field is no longer clicked and loses focus, or in other words, when it experiences a 'blur'
 */

emailField.addEventListener('blur', restoreEmailImg);

/**
 * 
 * This global variable detects the input field with the id 'password-field'
 */

passwordField = document.getElementById('password-field');

/**
 * 
 * This function removes the background image from the input field when the user enters text
 */

function removePasswordImg() {
        if (passwordField.value.trim() !== '') {
                passwordField.style.backgroundImage = 'none';
        }
}

/**
 * 
 * This function displays the background image if the input field is empty
 */

function restorePasswordImg() {
        if (passwordField.value.trim() === '') {
                passwordField.style.backgroundImage = 'url(/join-project-management-tool/assets/img/login-site/lock.svg)';
        }
}

/**
 *
 * The event listener activates the function restorePasswordImg when the field is no longer clicked and loses focus, or in other words, when it experiences a 'blur'
 */

passwordField.addEventListener('input', removePasswordImg);

/**
 * 
 * This function removes the background image from the input field when the user enters text
 */
 
passwordField.addEventListener('blur', restorePasswordImg);
