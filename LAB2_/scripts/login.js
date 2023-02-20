// Course : WEBD6201
// STUDENT NUMBER : 100844220
// NAME: Eugene (Hongju) Shin
// Date: 20 Feb 2023 




/**
 * link to register form in the bottom
 */
$(function () {
    let register = 
        `
        <p class="link-register">Don't have an account? </p>
        <a href="./register.html"> Register Here</a>
        `;
    //replace the login-holder
    $("#link-register").replaceWith(register);    
});


// when the login button is clicked
let submitButton = document.getElementById('submitButton');
console.log(submitButton);
if(submitButton) {
    submitButton.addEventListener('click', loginEvent, false)
}

/**
 * execute the login event
 * @param {*} e 
 */
function loginEvent(e) {
    e.preventDefault();
    // Create a new Nav Item, if there already is the inserted Username, do not create a new nav item
    if(!(document.getElementById('insertedUserName'))) {
        // insert the username between contact and login Nav bar ---------- 
        // get the nav bar element (ul)
        let topNavBar = document.getElementsByTagName('ul')[0];
        // create new li element for new insert(user name)
        let newUsername = document.createElement('li');
        // give an ID to the new created li element
        newUsername.id = 'insertedUserName';
        // create a new link element(UserName)
        let newLink = document.createElement('a');
        newUsername.appendChild(newLink);
        // get the username from the input field
        let userName = $("#username").val();
        newLink.innerHTML = userName;
        newLink.href = "#";
        // styling the new element
        //newUsername.className += "nav-item";
        newLink.className += "nav-link font-nav-top";
        // create a reference node (between 'about' and 'contact')
        const referenceNode = topNavBar.children[5];
        // insert the new li element(Human resource)
        topNavBar.insertBefore(newUsername, referenceNode)
        console.log(topNavBar);
    }
    // if there already is the inserted Username, just replace it with the new username
    
    else
    {
        // get the insertedUserName(li)
        let userNameNavItem = document.getElementById('insertedUserName');
        // replace the text of the 'a'element in the 'insertedUserName(li)'
        userNameNavItem.children[0].innerHTML = $("#username").val();
        
    }
}

