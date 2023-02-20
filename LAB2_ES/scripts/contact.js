// Course : WEBD6201
// STUDENT NUMBER : 100844220
// NAME: Eugene (Hongju) Shin
// Date: 20 Feb 2023 


console.log("page wired up");

// function for submit button
console.log('JS script wired up');
let submitButton = document.getElementById('submit-button');
if(submitButton) {
    submitButton.addEventListener('click', timeRedirect, false)
}

/**
 * redirect to main when submit after 3 sec 
 * @param {*} e 
 */
function timeRedirect(e) {
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let contactPassword = document.getElementById('exampleInputPassword1').value;
    console.log("Email: " + contactEmail + " , Password: " + contactPassword);
    e.preventDefault();
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000)

}


