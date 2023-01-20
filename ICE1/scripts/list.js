// Course : WEBD6201
// STUDENT NUMBER : 100844220
// NAME: Eugene (Hongju) Shin
// Date: 20 Jan 2023 

// document.getElementsByTagName() : return a list of the elements specified('TagName' in here)
// ADDING ITEMS TO START AND END OF LIST, it returns a list of tag name 'ul'
//we have only one ul in the list, so we select the index 0
let list = document.getElementsByTagName('ul')[0];  

// ADD NEW ITEM TO END OF LIST
// Create an element and put in a variable
let newItemLast = document.createElement('li'); 
// Create text node, this syntex is little weired, but 'createTextNode()' is for adding a text to another element.
//in here, I put a text 'half cream' to a variable to put another element
let newTextLast = document.createTextNode('half and half cream'); 
// Add the text I made(a node) to other element (use 'appendChild' to add a text node)
// refer: https://www.w3schools.com/jsref/met_document_createtextnode.asp
newItemLast.appendChild(newTextLast);   
// or I can write : newItemLast.appendChild('half cream'); 
// Add element end of list
list.appendChild(newItemLast);  

// ADD NEW ITEM START OF LIST
// Create element
let newItemFirst = document.createElement('li');
// Create text node
let newTextFirst = document.createTextNode('cucumbers')
// Add text node to element
newItemFirst.appendChild(newTextFirst);
// Add element to list
// insert it to the first child(or firstElementChild) node
list.insertBefore(newItemFirst, list.firstChild);



// Get All <li> elements in the document, (tag name 'li')
// or we can write as: document.querySelectorAll('li'); 
let listItems = document.getElementsByTagName('li')
// ADD A CLASS OF COOL TO ALL LIST ITEMS                                                        
for (let i = 0; i < listItems.length; i++) {     // Loop through elements
  listItems[i].className = 'cool';               // Change class to cool
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// select h2, and put this to a variable 'heading'
let heading = document.querySelector('h2');                        // h2 element
// get the text from the 'heading' : nodeValue
// refer 'nodeValue': https://www.w3schools.com/jsref/prop_node_nodevalue.asp
let headingText = heading.firstChild.nodeValue;                   
// get the number of the total 'li'
let totalItems = listItems.length;        
// change the heading  
// (style applied 'h2 span')
let newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content
// Update h2 using innerHTML (not textContent) because it contains markup
// refer: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
heading.innerHTML = newHeading;     






