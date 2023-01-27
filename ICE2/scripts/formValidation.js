console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function ValidateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
function ValidateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    let emailRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;

    //return true if the email address is valid - how to use regex
	return !!emailString && typeof emailString === 'string'
		&& emailString.match(emailRegex);
}


/*
 * Validate the name
* @returns {boolean}    validation result
*/
function ValidateUserName() {
    let userName = document.getElementById('usernameInput').value;
    document.getElementById('usernameError').style.backgroundColor = '#e5989b';
    if(userName == "") {
        document.getElementById('usernameError').innerHTML = 'Username cannot be empty';
        return false;
    }
    else if(userName.length < 4 || userName.length > 20) {
        document.getElementById('usernameError').innerHTML = 'Username has to be between 4~20 chracters';
        return false;
    }
    else if(userName.indexOf(" ") >= 0) {
        document.getElementById('usernameError').innerHTML = 'Username cannot have space(s)';
        return false;
    }
    else {
        document.getElementById('usernameError').innerHTML = '';
        return true;
    }
}

/*
 * Clear the error messages
*/
function clearErrorMessages() {
    let errors = document.getElementsByClassName("errorOut");
    for (let i = 0; i < errors.length; i++) {
        errors[i].innerHTML = '';
    }
}


//TODO:
// Make all fields required :done
// Add a pattern attribute in the telephone element (HTML) : done
// Ensure the password is redacted into dots on screen when typed in : done
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!): DONE
// If it is not valid, be sure to update ANY OF THE error message and some highlighting (red background, maybe?): done
// Validate the username when the form is submitted: done
// Clear any additional error message and highlighting when the form is reset: done
// COMMENT EVERYTHING :D
// Pop your .js file into the meeting chat when you're done and we'll have a look at some examples! (Feel free to leave your name off)

// get the submit object
let submitButton = document.getElementById("submit-reg-form");
// if submit
if(submitButton) {
    // add a event listner to the submit object
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        ValidateUserName();
    }, false)
}

// get reset object
let resetButton = document.getElementById("resetForm");
if(resetButton) {
    // when click, clear all the error messages
    resetButton.addEventListener('click', function(e){
        clearErrorMessages();
    },false)
}

