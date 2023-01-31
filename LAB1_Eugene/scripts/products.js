/* Course : WEBD6201
STUDENT NUMBER : 100844220
NAME: Eugene (Hongju) Shin
Date: 03 Feb 2023  */


// get the Div element
let productsDiv = document.getElementById("products");

// Products Div style from stylesheet
// Here, apply the entire style from css, and apply heading style from this document (learning purpose)
productsDiv.classList.add("productsDivClasses");

// variable for products page style
let pageHeadingText = 'My Movie Products';
let pageHeadingTextColor = '#dad';
// variable for procuts style
let productHeadingColor = 'pink';
// giving a margin to entire frame(Div)
productsDiv.style.margin = "1em";

// page heading ---------------------------------------------
// a horizontal line on the top
let horizontalLine = document.createElement("hr")
productsDiv.appendChild(horizontalLine);
//productsDiv.innerHTML = '<hr/>';

// create a page heading element
let pageHeading = document.createElement("div");
// heading text
let pageHeadingH4 = document.createElement("h4");
// put the page heading text into here
pageHeadingH4.innerHTML = pageHeadingText;
// set styles
pageHeadingH4.style.color = pageHeadingTextColor;
pageHeadingH4.style.textShadow = "3px 3px 6px #ff0000";
// apply the page heading text
productsDiv.appendChild(pageHeadingH4);
// add another horizontal line
document.getElementById("products").innerHTML += "<hr/>";

// products 1-------------------------------------------------
let product01 = document.createElement("div");
// product 01 details
// product 1 : heading text 
let product1HeadingText = "Avatar the movie";
let procuct1HeadingH4 = document.createElement("h4");
// style change in this document
procuct1HeadingH4.style.color = productHeadingColor;
// add the text to heading
procuct1HeadingH4.innerHTML = product1HeadingText;

// Text for the products
let product1Text = "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.";
let procuct1TextP = document.createElement("p");
procuct1TextP.innerHTML = product1Text;
// put image 
product01.innerHTML = '<img src="./images/avatar.jpg" alt="avatar movie" width = "500">';

// apply the objects to the Div
productsDiv.appendChild(product01);
productsDiv.appendChild(procuct1HeadingH4);
productsDiv.appendChild(procuct1TextP);

// add a line break between items
document.getElementById("products").innerHTML += "<br /><br />";

// products 2-------------------------------------------------
let product02 = document.createElement("div");
// product 02 details
// product 2 : heading text 
let product2HeadingText = "Titanic the famous movie";
let procuct2HeadingH4 = document.createElement("h4");
procuct2HeadingH4.style.color = productHeadingColor;
procuct2HeadingH4.innerHTML = product2HeadingText;

let product2Text = "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic";
let procuct2TextP = document.createElement("p");
procuct2TextP.innerHTML = product2Text;

product02.innerHTML = '<img src="./images/titanic.jpg" alt="titanic the movie" width = "500">';

productsDiv.appendChild(product02);
productsDiv.appendChild(procuct2HeadingH4);
productsDiv.appendChild(procuct2TextP);

document.getElementById("products").innerHTML += "<br /><br />";

// products 3-------------------------------------------------
let product03 = document.createElement("div");
// product 03 details
// product 3 : heading text 
let product3HeadingText = "Dune: Part One";
let procuct3HeadingH4 = document.createElement("h4");
procuct3HeadingH4.style.color = productHeadingColor;
procuct3HeadingH4.innerHTML = product3HeadingText;

let product3Text = "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.";
let procuct3TextP = document.createElement("p");
procuct3TextP.innerHTML = product3Text;

product03.innerHTML = '<img src="./images/dune.jpg" alt="dune the movie" width = "500">';

productsDiv.appendChild(product03);
productsDiv.appendChild(procuct3HeadingH4);
productsDiv.appendChild(procuct3TextP);


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


// fixed bottom (footer) ------------------------------------
// get the footer element to insert bottom element
let footer = document.getElementById("footer");
// styling footer design
footer.className += "footer-style";
let date = new Date().getFullYear();
footer.innerHTML = "Copyright &copy; " + date + ".  All right reserved by Eugene Shin";