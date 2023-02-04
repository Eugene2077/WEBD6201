// Course : WEBD6201
// STUDENT NUMBER : 100844220
// NAME: Eugene (Hongju) Shin
// Date: 03 Feb 2023 

console.log('selectors.js loaded');

function highlight(element) {
    element.css("background-color", "#fcf30040");
}

function cssSelector(element) {
    // all pargraphs
    $('p').css("background-color", "#2a9d8f");
    // using class
    $('.red-box').css("background-color", "#2a9d8f");
    // using ids
    $('#list').css("background-color", "red");   
    // using tag name
    $('h1, h2').css("background-color", "#3a86ff");
    $('li:even').css("background-color", "red");

}

function traversingTheDom() {
    // $('#list').find('li').css("background-color", "#3a86ff");
    // // all parantes of the ul
    // $('#list').parents('body').css("background-color", "#3a86ff"); 
    // // direct parent
    // $('#list').parent('body').css("font-size", "20px"); 

    //prev & next
    $('#list').prev().css("background-color", "#3a86ff");   
    $('#list').next().css("background-color", "#3a86ff");   
    $('#list').prev().next().css("background-color", "#3a86ff");   
}

function filtering() {
    // $('#list').find('li').filter(':even').css("background-color", "#3a86ff");

    // $('#list').filter(function(index){
    //     return index % 3 == 0;  
    // }).css("background-color", "#219ebc");

    let items = $('#list').find('li');
    highlight(items);
}

function addingReplacingRemoving() {
    $('ul ul:first').append($("<li>I am going to be the last item</li>"));

    $("<li>Now, I am going to be the last item</li>").appendTo('ul ul:first');

    // insrt as first child
    $('ul ul:first').prepend("<li>I am going to be the first item</li>");
    // reverse the syntax
    $("<li>Now, I am the first !!!!</li>").prependTo("ul ul:first");
    // after
    $('.red-box').after("<div class='red-box'>Another REd Box</div>");

    // sample text
    let text1= "Last night, the Darth Vader has surrendered.";
    // replace with new element
    $('li').replaceWith(`<li>${text1}</li>`);
    // replace all
    $("<div class='green-box'>Created a Green box</div>").replaceAll(".red-box");

    // remove
    $('li').remove();

    // detaching
    let detachedItems = $('li').detach();
    $('#content').append(detachedItems);


}



addingReplacingRemoving();

//filtering();

//traversingTheDom(); 

//cssSelector(); 