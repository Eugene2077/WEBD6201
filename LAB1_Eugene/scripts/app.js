console.log('JS script wired up');
let submitButton = document.getElementById('submit-button');
if(submitButton) {
    submitButton.addEventListener('click', timeRedirect, false)
}

function timeRedirect(e) {
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let contactPassword = document.getElementById('exampleInputPassword1').value;
    console.log("Email: " + contactEmail + "Password: " + contactPassword);
    e.preventDefault();
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000)

}