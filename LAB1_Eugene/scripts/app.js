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


// welcome message and the heading part ---
let welcomeHeding = "Welcome to my website! ";
let welcomeText = "I am thrilled to offer you a wide selection of high-quality products and services that are sure to meet your needs and exceed your expectations. I am dedicated to providing you with the best possible shopping experience and we're always happy to help you find exactly what you're looking for. I am constantly updating my inventory to bring you the latest and greatest products at competitive prices. Thank you for choosing me and I look forward to serving you!";
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

// Append a image from css
let imgDiv = document.createElement("div");
imgDiv.classList.add("img-server");
welcomeDiv.appendChild(imgDiv);

// Append the h3 element to the div element
welcomeDiv.appendChild(newH3);
// Append the p element to the div element
welcomeDiv.appendChild(newP);

// change the styles of the newH3(headng for the welcome)
newH3.setAttribute("style", "color:#cc99ff; margin-bottom:1em;");
// change the margine of the welcome contents
welcomeDiv.style.margin = '1em';


// fixed bottom (footer) ------------------------------------
// get the footer element to insert bottom element
let footer = document.getElementById("footer");
// styling footer design
footer.className += "footer-style";
let date = new Date().getFullYear();
footer.innerHTML = "Copyright &copy; " + date + ".  All right reserved by Eugene Shin";