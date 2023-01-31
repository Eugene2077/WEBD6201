/* Course : WEBD6201
STUDENT NUMBER : 100844220
NAME: Eugene (Hongju) Shin
Date: 03 Feb 2023  */


// Get the div element from the HTML
let welcomeDiv = document.getElementById("about");

// page heading
let pageHeding = "About Eugene";
let headingH3 = document.createElement("h3");
headingH3.innerHTML = pageHeding;
// change the styles of the heading text
headingH3.setAttribute("style", "color:#cc99ff; margin-bottom:1em;");
// change the margine of the contents
welcomeDiv.style.margin = '1em';
// Append page head text 
welcomeDiv.appendChild(headingH3);

// first paragraph ---
let paraHeading1Message = "When I was a little boy";
let para1Text = "It was a shock to see an electronic keyboard plays music by itself. It was one of my friend's dad who is a computer programmer. Ever since then I always curious about computer and what this thing possibly could do. I studied Law at a university in Seoul, but I got different jobs because I wasn't interested in law. Worked at a medium size IT company working advertisement business using network operated digital set-top box. I involved in operation of the business, creating the advertisement video content and developing the equipment for displaying big LCD screens installed in public places.";
// Create an h3 element
let paraHeading1 = document.createElement("h5");
// Creare a text(p) element
let newP = document.createElement("p");
// Add text to the h3 element
paraHeading1.innerHTML = paraHeading1Message;
// Add text to the p element
newP.innerHTML = para1Text;

// Append the first image from css
let imgDiv = document.createElement("div");
imgDiv.classList.add("img-hiking");
welcomeDiv.appendChild(imgDiv);

// Append the paraHeading1 element to the div element
welcomeDiv.appendChild(paraHeading1);
// Append the p element to the div element
welcomeDiv.appendChild(newP);

// change the styles of the paraHeading1(headng for the welcome)
paraHeading1.setAttribute("style", "color:#cc9955; margin-bottom:1em;");
// change the margine of the welcome contents
welcomeDiv.style.margin = '1em';

// second image
let imgDiv2 = document.createElement("div");
imgDiv2.classList.add("img-skiing");
welcomeDiv.appendChild(imgDiv2);

// second paragraph
let paraHeading2Message = "Still, I was ";
let para2Text = "Passionate to learning computer programming, so I ended up enrolling Durham College to learn Computer Programming. It is really interesting and fun to learn about programming. C++ and .NET are the most fundamental languages, and I am enjoying it. Python is so much fun to use. Learning about networks and server is giving me a lot of inspiration.";
// Create a paragraph2 heading element
let paraHeading2 = document.createElement("h5");
// Creare a text element
let newP2 = document.createElement("p");
// Add text to the new created heading element
paraHeading2.innerHTML = paraHeading2Message;
// Add text to the p element
newP2.innerHTML = para2Text;

// Append the paraHeading1 element to the div element
welcomeDiv.appendChild(paraHeading2);
// Append the p element to the div element
welcomeDiv.appendChild(newP2);
// change the styles of the paraHeading2(headng for the welcome)
paraHeading2.setAttribute("style", "color:#cc9955; margin-bottom:1em;");


// third image
let imgDiv3 = document.createElement("div");
imgDiv3.classList.add("img-tele");
welcomeDiv.appendChild(imgDiv3);

// third paragraph
let paraHeading3Message = "I like hiking, cross-country ski and watching stars";
let para3Text = "When I walking in nature, I am peaceful, relaxed, and in touch with nature when walking in a forest. Running in a snow covered lake gives me a great vibe something like I am in a different world. Watching stars gives me a great insperation about this universe and life itself";
// Create a paragraph3 heading element
let paraHeading3 = document.createElement("h5");
// Creare a text element
let newP3 = document.createElement("p");
// Add text to the new created heading element
paraHeading3.innerHTML = paraHeading3Message;
// Add text to the p element
newP3.innerHTML = para3Text;

// Append the paraHeading1 element to the div element
welcomeDiv.appendChild(paraHeading3);
// Append the p element to the div element
welcomeDiv.appendChild(newP3);
// change the styles of the paraHeading3(headng for the welcome)
paraHeading3.setAttribute("style", "color:#cc9955; margin-bottom:1em;");


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