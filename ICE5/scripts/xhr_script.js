console.log('xhr_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// instantiate the XMLHttpRequest object with the new keyword
let xhr = new XMLHttpRequest();

// create a callback function to fire when the onreadystatechange happens
// onreadystatechange Defines a function to be called when the readyState property changes
xhr.onreadystatechange = () => {
    console.log(`The state: ${xhr.readyState}`);
    // The readyState property of the XHR object tracks the current state of the request, and the value 4 indicates that the response has been fully received.
    if (xhr.readyState === 4) {
        // The status property of the XHR object contains the HTTP status code of the response, and a status code of 200 indicates that the request was successful.
        if(xhr.status === 200) {
            //console.log(`The response:  ${xhr.responseText}`);
            // turn json string into an object.
            let jasonResponse = JSON.parse(xhr.responseText);
            /* The xhr.responseText property is used to access the response data returned from the server. It contains the response body as a string, which can be further processed as needed.  
            Note that xhr.responseText will only contain the response body as a string. If the response is in a different format such as JSON, you would need to parse the response using JSON.parse() before working with the data.*/

            // console log to see what we have
            console.log(`The response: ${jasonResponse[0]['url']}`);
            let photo_url_1 = jasonResponse[0]['url'];
            let photo_url_2 = jasonResponse[1]['url'];

            // update the 1st image
            $('#photo1').attr("src",photo_url_1);
            // update the 1st figcaption ( ~ means sibring)
            $('#photo1 ~ figcaption').text("this is the first update image by the AJAX call");
            // update the 2nd image
            $('#photo2').attr("src",photo_url_2);
            // update the 2nd figcaption
            $('#photo2 ~ figcaption').text("this is the second update image by the AJAX call");
            // send error message
        } else {
            alert(`An error occurred: returned with status code ${xhr.status}`);
        }
        
    } 
}
// use the .open() method to configure the object
xhr.open('GET', url_photos);

// add datatype to header
// xhr.setRequestHeader('Content-Type', 'application/json');

// use the .send() method to send the request
xhr.send();


/* When an XHR request is made, it goes through different states, and the readyState property of the XHR object tracks the current state of the request. The readyState property is an integer value that can have the following values:
xhr.readyState == 0: The request has not been initialized yet. This is the initial state when an XHR object is created.
xhr.readyState == 1: The request has been set up, but the send() method has not been called yet. This is the state after the open() method has been called.
xhr.readyState == 2: The request has been sent to the server. This is the state after the send() method has been called.
xhr.readyState == 3: The server is processing the request and sending back the response. This state indicates that some response data has been received, but the entire response is not available yet.
xhr.readyState == 4: The request has been completed, and the response is available. This is the state after the response data has been received in full.
It's important to note that readyState is not the same as the status code of the response, which is accessed using the status property of the XHR object. The status property indicates the HTTP status code of the response, such as 200 for a successful request or 404 for a not-found error. */

/* JSON.parse() is a built-in JavaScript method that is used to convert a JSON string to a JavaScript object.
JSON stands for "JavaScript Object Notation," which is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is commonly used for sending and receiving data between a client and a server.
JSON.parse() takes a JSON string as its argument and returns a JavaScript object that represents the parsed data. Here's an example of how it's used: */