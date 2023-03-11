console.log("fetch_script.js loaded");

// get the button for fetch
let btnFetch = $("#fetchJoke");
// create a url variable
let url_fetch = 'https://icanhazdadjoke.com';
//need a header Accept value set to 'application/json'
let myFetchHeaders = {"Accept": "application/json"}

// 버튼 btnFetch 가 클릭되면.. 
$(btnFetch).click(() => {
    // fetch() method sends a GET request to the specified URL 
    //and returns a Promise that resolves to a Response object
    // myFetchHeaders에서 정한 것을 가져와라
    fetch(url_fetch, {
        // give the nescessary header data
        headers: myFetchHeaders
    })
    // then() method is used to process the Response object and 
    //extract the JSON data using the response.json() method
    
    // first then() to recieve the promise
    .then(res => {
        // send the json from the promise on to the next then()
        return res.json();
    })
    // The second then() block is then used to work with the retrieved data, 
    //and any errors are caught in the catch() block
    .then((jsonRes) => {
        // console log the json
        console.log(jsonRes['joke']);
        // set the output
        $('#output').text(jsonRes['joke']);

      })
})




// Promise in JavaScript example
function myDisplayer(some) {
        document.getElementById("promise-container").innerHTML = some;
      }
      
// 새로운 약속 promise 을 정의한다. 
//성공적으로 실행되면 결과를 myReslve라는 변수에, 실패하면 에러를 myReject변수에 저장한다.
let myPromise = new Promise(function(myResolve, myReject) {
let x = 0;

if (x == 0) {
        myResolve("OK");
} else {
        myReject("Error");
}
});

myPromise.then(
function(value) {myDisplayer(value);},
function(error) {myDisplayer(error);}
);

/*
Promises are used in JavaScript to handle asynchronous operations such as network requests, file I/O, and database queries. 
Prior to the introduction of Promises in ES6, callbacks were commonly used to handle asynchronous code. 
However, callbacks can lead to callback hell, which is a situation where the code becomes difficult to read and maintain due to nested callbacks.

Promises provide a cleaner way to handle asynchronous operations. 
A Promise represents a value that may not be available yet, but will be resolved at some point in the future. The Promise object has three states:
-Pending: The initial state, before the promise is resolved or rejected.
-Resolved: The promise has been resolved, meaning the asynchronous operation completed successfully and the result is available.
-Rejected: The promise has been rejected, meaning that the asynchronous operation failed and an error message is available.

Promises also provide a number of methods to handle the asynchronous result, such as 
 .then(), which allows you to specify a function to be called when the promise is resolved, and 
 .catch(), which allows you to specify a function to be called when the promise is rejected.
Using Promises makes it easier to write and read asynchronous code, and reduces the likelihood of bugs that can occur with nested callbacks. 
*/

