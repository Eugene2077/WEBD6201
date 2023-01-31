/* Course : WEBD6201
STUDENT NUMBER : 100844220
NAME: Eugene (Hongju) Shin
Date: 03 Feb 2023  */


// get the Div element
let servicesDIV = document.getElementById("services");

// services Div style from stylesheet
// Here, apply the entire style from css, and apply heading style from this document (learning purpose)
servicesDIV.classList.add("productsDivClasses");

// variable for products page style
let pageHeadingText = 'My Services';
let pageHeadingTextColor = '#dad';
// variable for procuts style
let serviceHeadingColor = 'pink';
// giving a margin to entire frame(Div)
servicesDIV.style.margin = "1em";

// page heading ---------------------------------------------
// a horizontal line on the top
let horizontalLine = document.createElement("hr")
servicesDIV.appendChild(horizontalLine);

// create a page heading element
// heading text
let pageHeadingH4 = document.createElement("h4");
// put the page heading text into here
pageHeadingH4.innerHTML = pageHeadingText;
// set styles
pageHeadingH4.style.color = pageHeadingTextColor;
pageHeadingH4.style.textShadow = "3px 3px 6px #ff0000";
// apply the page heading text
servicesDIV.appendChild(pageHeadingH4);

// My resume link
let myResumeText = document.createElement("a"); 
myResumeText.href = "./misc/resume.html";
myResumeText.innerHTML = "Go to My RESUME";
servicesDIV.appendChild(myResumeText);

// add another horizontal line
document.getElementById("services").innerHTML += "<hr/>";

// service 1-------------------------------------------------
let service01 = document.createElement("div");
// service 01 details
// service 1 : heading text 
let service1HeadingText = "Web design";
let service1HeadingH4 = document.createElement("h4");
// style change in this document
service1HeadingH4.style.color = serviceHeadingColor;
// add the text to heading
service1HeadingH4.innerHTML = service1HeadingText;

// Text for the products
let service1Text = "From personal websites to online ecommerce stores, and corporates websites to custom web apps, Web Design Unit. is the all-in-one platform to build a beautiful interactive responsive websites that engage visitors.";
let service1TextP = document.createElement("p");
service1TextP.innerHTML = service1Text;
// put image 
service01.innerHTML = '<img src="./images/web-design.jpg" alt="web design" width = "500">';

// apply the objects to the Div
servicesDIV.appendChild(service01);
servicesDIV.appendChild(service1HeadingH4);
servicesDIV.appendChild(service1TextP);

// add a line break between items
document.getElementById("services").innerHTML += "<br /><br />";

// service 2-------------------------------------------------
let service02 = document.createElement("div");
// service 02 details
// service 2 : heading text 
let service2HeadingText = "Mobile App developoment";
let service2HeadingH4 = document.createElement("h4");
service2HeadingH4.style.color = serviceHeadingColor;
service2HeadingH4.innerHTML = service2HeadingText;

let product2Text = "I am a premier provider of custom cloud application & software design nationally. Replace your old manual workflow with custom software - save time and money";
let service2TextP = document.createElement("p");
service2TextP.innerHTML = product2Text;

service02.innerHTML = '<img src="./images/mobileapp.jpg" alt="mobile app developement" width = "500">';

servicesDIV.appendChild(service02);
servicesDIV.appendChild(service2HeadingH4);
servicesDIV.appendChild(service2TextP);

document.getElementById("services").innerHTML += "<br /><br />";
// service 3-------------------------------------------------
let service03 = document.createElement("div");
// service 03 details
// service 3 : heading text 
let service3HeadingText = "Custom video production";
let service3HeadingH4 = document.createElement("h4");
service3HeadingH4.style.color = serviceHeadingColor;
service3HeadingH4.innerHTML = service3HeadingText;

let service3Text = "Creative customer Video delivers complete expertise for all of your corporate video production needs. Youtube video creation, filming, editing: all you need can be supported";
let service3TextP = document.createElement("p");
service3TextP.innerHTML = service3Text;

service03.innerHTML = '<img src="./images/video.jpg" alt="vedio creation" width = "500">';

servicesDIV.appendChild(service03);
servicesDIV.appendChild(service3HeadingH4);
servicesDIV.appendChild(service3TextP);

servicesDIV.appendChild(myResumeText);


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