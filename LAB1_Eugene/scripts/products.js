console.log('script loaded');

// get the Div element
let productsDiv = document.getElementById("products");
// page body style
// To To, stying the contents

// products 1-------------------------------------------------
let product01 = document.createElement("div");
// product 01 details
// product 1 : heading text 
let product1HeadingText = "Avatar the movie";
let procuct1HeadingH4 = document.createElement("h4");
procuct1HeadingH4.innerHTML = product1HeadingText;

let product1Text = "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.";
let procuct1TextP = document.createElement("p");
procuct1TextP.innerHTML = product1Text;

product01.innerHTML = '<img src="./images/avatar.jpg" alt="avatar movie" width = "400">';

productsDiv.appendChild(product01);
productsDiv.appendChild(procuct1HeadingH4);
productsDiv.appendChild(procuct1TextP);


// products 2-------------------------------------------------
let product02 = document.createElement("div");
// product 02 details
// product 2 : heading text 
let product2HeadingText = "Titanic the famous movie";
let procuct2HeadingH4 = document.createElement("h4");
procuct2HeadingH4.innerHTML = product2HeadingText;

let product2Text = "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic";
let procuct2TextP = document.createElement("p");
procuct2TextP.innerHTML = product2Text;

product02.innerHTML = '<img src="./images/titanic.jpg" alt="titanic the movie" width = "400">';

productsDiv.appendChild(product02);
productsDiv.appendChild(procuct2HeadingH4);
productsDiv.appendChild(procuct2TextP);