// Course : WEBD6201
// STUDENT NUMBER : 100844220
// NAME: Eugene (Hongju) Shin
// Date: 10 Feb 2023 



console.log('app.js loaded')
// TO DO: load the user class script with alias
import * as userClass from './user.js'
// let newUser = userClass.User("a","b","c","d","e");
// console.log(newUser.displayUser());


/**
 * iffe to insert nav bar at the top of each page
 * about $(function(){}) refer to https://stackoverflow.com/questions/7642442/what-does-function-do#:~:text=So%20what%20is%20%24(function,function()%20%7B%7D%20into%20it.
 */
// 
$(function () {
    let navBar = `<div class="naviation">
	                <nav class="nav">
		                <a class="nav-link active" href="index.html">Home</a>
		                <a class="nav-link" href="slideshow.html">Slideshow</a>
		                <a class="nav-link disabled" id="username" href="#"></a>
		                <a class="nav-link" href="form.html">Form</a>
	                </nav>
                </div>`

    //replace the nav-holder
    $("#nav-holder").replaceWith(navBar);
});

/**
 * function to add styling to all links on the page
 */
$(function () {
    $("a").addClass("fancy-link");
});


/**
 * fuction to demo adding content with .text() and .html()
 *  */
$(function () {

    // let navDiv = $("div:first");
    // console.log(navDiv.html())
    // console.log(navDiv.text())

    let contentDiv = $("#content-div");
    // console.log(contentDiv.html())
    // console.log(contentDiv.text())

    // text to use with new paragraph
    let text = "It is one of his best works!"
    // create a paragraph
    let newP = $("<p></p>");
    // TO DO: add text with html()
    newP.text(text);
    // append to contentDiv
    // contentDiv.append(nweP);
    newP.appendTo(contentDiv);

    // add text
    newP.text("I am very excited for the opening of the new adaptation of his work.");
    // TO DO: test when very excited is in a strong tag
    newP.text("I am <strong>very excited</strong> for the opening of the new adaptation of his work.");
    // TO DO: append to newP text
    newP.html("I am <strong>so much excited</strong> for the the new adaptation of his work.");
});

/**
 * function to demo adding toggle to button
 *  */
$(function () {
    // TO DO: complete the function
    // get the button
    let btnHide = $("#btnDivToggle");
    // add a click function
    btnHide.click(function () {
        // get the parent div's p tags
        let paras = $(".toggleDiv").find("p");
        // for each p in the div
        $(paras).each(function () {

            $(this).toggle(); // this method toggles the display of the p tag
            // below lines are doing the same thing as above line

            // // if it has toggleHide class
            // if($(this).hasClass("toggleHide")) {
            //     //remove toggleHide class and add toggleShow class
            //     // styling is controlled in the css
            //     $(this).removeClass("toggleHide").addClass("toggleShow");
            // } 
            // // otherwise assume it has the toggleShow class
            // else {
            //     //remove toggleShow and add toggleHide
            //     $(this).removeClass("toggleShow").addClass("toggleHide");
            // }
        });
            
    });

});

// function to add image next to the text
if($("#speckled-excerpt")) {
    let aspImg = "<img class='asp-img' src ='./images/asp.jpeg'>";
    $(aspImg).insertBefore($("#speckled-excerpt"));

}


// FORM JQUERY
// TO DO: import form validation functions with alias
import * as formValidation from './form.js'

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
            // get the username input
            $("#inputUsername").val(),
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
            // validate  username
            $("#username-group").children(".errorMessage").html
            (formValidation.validateUsername(unvaliddated_user.username));
            // validate confirm password
            let error = formValidation.validatePassword(unvaliddated_user.
                password, $("#inputPassword2").val());
            $("#pass1-group").children(".errorMessage").html(error);
            $("#pass2-group").children(".errorMessage").html(error);




});
}

// TO DO: if reset button present
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




// SLIDESHOW
// TO DO: if there's a gallery class on the page
if($("#gallery")) {
    // call a callback function to handle the galler rotation
    $(function(){
        // get the image tag
        let galleryImage = $(".gallery").find("img").first();
        // get a list of your images
        let images = [
            "./images/portraits/portrait-01.jpg",
            "./images/portraits/portrait-02.jpg",
            "./images/portraits/portrait-03.jpg",
            "./images/portraits/portrait-04.jpg",
            "./images/portraits/portrait-05.jpg",
            "./images/portraits/portrait-06.jpg",
            "./images/portraits/portrait-07.jpg",
            "./images/portraits/portrait-08.jpg",
            "./images/portraits/portrait-09.jpg",
            "./images/portraits/portrait-10.jpg",
            "./images/portraits/portrait-11.jpg",
            "./images/portraits/portrait-12.jpg",
            "./images/portraits/portrait-13.jpg",
            "./images/portraits/portrait-14.jpg",
            "./images/portraits/portrait-15.jpg",
            "./images/portraits/portrait-16.jpg",
            "./images/portraits/portrait-17.jpg",
            "./images/portraits/portrait-18.jpg",
        ]
      // set a first index
            let imageIndex = 0;
        // call the setInterval method that will re-call this method at a set interval
            setInterval(function () {
                // increment the image index but no greater than how many images you have
                imageIndex = (imageIndex + 1) % images.length;
                // fade out the current image
                galleryImage.fadeOut(1000, function () {
                    // $(this) refers to the object that calls the callback or in this case galleryImage
                    // change the src attribute of the image
                    $(this).attr("src", images[imageIndex]);
                    // fade it back in
                    $(this).fadeIn(1000);
                    // debug statement
                    console.log($(this).attr("src"));
                })
                //set the time for more than how long the fade out and in process will take or you won't get the images you expect
            }, 3000);

    });

    
};