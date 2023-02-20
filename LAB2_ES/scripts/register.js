// Course : WEBD6201
// STUDENT NUMBER : 100844220
// NAME: Eugene (Hongju) Shin
// Date: 20 Feb 2023 


/**
 * link to the log in form
 */
$(function () {
    let login = 
        `
        <p class="link-register">Already have an account? </p>
        <a href="./login.html"> Sign in</a>
        `;
    //replace the login-holder
    $("#link-login").replaceWith(login);    
});



// import form validation functions with alias
import * as formValidation from './form.js'
import * as userClass from './user.js'

// if the submit button is on the page
if ($("#btnRegSubmit")) {
    // TO DO: add a click function that calls a callack function
    $("#btnRegSubmit").click(function (e) {
        // prevent the default submit action (stay on the page)
        e.preventDefault();
        // create a new user
        // you normally wouldn't do this unless you had validated, but we're going to do it to show how class memebers work in calling the validation
        const unvaliddated_user = new userClass.
        User(
            // get the first name input
            $("#inputFirst").val(),
            // get the last name input
            $("#inputLast").val(),
            // get the email input
            $("#inputEmail").val(),
            // get the password input
            $("#inputPassword").val()
            )

            // debug statement for object
            console.log(`User details: ${unvaliddated_user.displayUser()}`);

            // validate first name
            $("#first-group").children(".errorMessage").html
            (formValidation.validateFirst(unvaliddated_user.firstName));
            // validate last name
            $("#last-group").children(".errorMessage").html
            (formValidation.validateLast(unvaliddated_user.lastName));
            // validate email
            $("#email-group").children(".errorMessage").html
            (formValidation.validateEmail(unvaliddated_user.email));

            // // validate  username
            // $("#username-group").children(".errorMessage").html
            // (formValidation.validateUsername(unvaliddated_user.username));

            // validate confirm password
            let error = formValidation.validatePassword(unvaliddated_user.
                password, $("#inputPassword2").val());
            $("#pass1-group").children(".errorMessage").html(error);
            $("#pass2-group").children(".errorMessage").html(error);
});
}

// if reset button present
if($("#btnRegReset")) {
    // bind a click event handler
    $("#btnRegReset").click(function (e) {
        // clear out all error message paragraphs
        // $("#first-group").children(".errorMessage").html("");
        // $("#last-group").children(".errorMessage").html("");
        // $("#username-group").children(".errorMessage").html("");
        // $("#pass1-group").children(".errorMessage").html("");
        // $("#pass2-group").children(".errorMessage").html("");
        // or instead of all above
        $(".errorMessage").html("<p></p>");

    });
}


