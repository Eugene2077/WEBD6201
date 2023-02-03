/* Course : WEBD6201
STUDENT NUMBER : 100844220
NAME: Eugene (Hongju) Shin
Date: 03 Feb 2023  */


// Change nav bar 'Product' to 'Interest' ----------------------------
// get the nav bar element (ul)
let navItem = document.getElementsByTagName('ul')[0];
// select the second('product') child element of the 'productsNav'
let productNav = navItem.getElementsByTagName('li')[1];
// select the anchor
let productLink = productNav.getElementsByTagName('a')[0];
productLink.innerHTML = 'Interest';
productLink.href = './products.html';

// nav bar insert (Human resources) ---------------------------
// get the nav bar element (ul)
let humanResourceNav = document.getElementsByTagName('ul')[0];
// create new li element for new insert(Human resource)
let newNavHumanResource = document.createElement('li');
// create a new link element(Human resource)
let newLink = document.createElement('a');
newNavHumanResource.appendChild(newLink);
newLink.innerHTML = 'Human Resources';
newLink.href = "./human-resources.html";
// styling the new element
//newNavHumanResource.className += "nav-item";
newLink.className += "nav-link font-nav-top";
// create a reference node (between 'about' and 'contact')
const referenceNode = humanResourceNav.children[4];
// insert the new li element(Human resource)
humanResourceNav.insertBefore(newNavHumanResource, referenceNode)



// contact page ------------------------------------------------
// function for submit button
console.log('JS script wired up');
let submitButton = document.getElementById('submit-button');
if(submitButton) {
    submitButton.addEventListener('click', timeRedirect, false)
}
// redirect to main when submit after 3 sec 
function timeRedirect(e) {
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let contactPassword = document.getElementById('exampleInputPassword1').value;
    console.log("Email: " + contactEmail + " , Password: " + contactPassword);
    e.preventDefault();
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000)

}


// fixed bottom (footer) ------------------------------------
// get the footer element to insert bottom element
let footer = document.getElementById("footer");
// styling footer design
footer.className += "footer-style";
let date = new Date().getFullYear();
footer.innerHTML = "Copyright &copy; " + date + ".  All right reserved by Eugene Shin";