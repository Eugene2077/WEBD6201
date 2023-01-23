console.log('JS script wired up');
let submitButton = document.getElementById('submit-button');
if(submitButton) {
    submitButton.addEventListener('click', timeRedirect, false)
}

function timeRedirect(e) {
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let contactPassword = document.getElementById('exampleInputPassword1').value;
    console.log("Email: " + contactEmail + "Password: " + contactPassword);
    //e.preventDefault();
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000)

}


// index page -------------------------------------------------

// welcome message and the heading part ---
let welcomeHeding = "Welcome to our company! ";
let welcomeText = "We are thrilled to offer you a wide selection of high-quality products and services that are sure to meet your needs and exceed your expectations. Our team is dedicated to providing you with the best possible shopping experience and we're always happy to help you find exactly what you're looking for. We are constantly updating our inventory to bring you the latest and greatest products at competitive prices. Thank you for choosing us and we look forward to serving you!";
// Create an h3 element
let newH3 = document.createElement("h3");
// Creare a text(p) element
let newP = document.createElement("p");
// Add text to the h3 element
newH3.innerHTML = welcomeHeding;
// Add text to the p element
newP.innerHTML = welcomeText;
// Get the div element from the HTML
let welcomeDiv = document.getElementById("welcome");
// Append the h3 element to the div element
welcomeDiv.appendChild(newH3);
// Append the p element to the div element
welcomeDiv.appendChild(newP);

// change the styles of the newH3(headng for the welcome)
newH3.setAttribute("style", "color:#cc99ff; margin-bottom:1em;");
// change the margine of the welcome contents
welcomeDiv.style.margin = '1em';