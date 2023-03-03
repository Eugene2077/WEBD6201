console.log("xhr_script.js loaded");

// get the button for xhr
let btnXhr = $("#xhrJoke");
// create a url variable
let url_xhr = 'https://icanhazdadjoke.com';
// create a click callback that handles the API call
$(btnXhr).click(() => {
        // instantiate an XMLHttpRequest object
        let xhr = new XMLHttpRequest();
        // confiture with open()
        xhr.open("GET", url_xhr);

        console.log(xhr);

        // set the necessary headers for icanhazdadjoke.com
        xhr.setRequestHeader('Accept', 'application/json');
        // create the callback to handle the onreadystatechange
        xhr.onreadystatechange = () => {
                // only execute when done and status is 200
                if(xhr.readyState === 4 && xhr.status === 200) {
                        // get the responseText
                        let joke = xhr.responseText;
                        // console log
                        console.log(joke);
                        // JSON.parse the joke
                        let parsedJoke = JSON.parse(joke);
                        // set the output
                        $('#output').text(parsedJoke['joke']);

                        console.log(parsedJoke);

                }
        }
                
        // send the request
        xhr.send();

})





/* 
The code xhr.setRequestHeader('Accept', 'application/json') is used to set a request header for an HTTP request made through the XMLHttpRequest (XHR) object.
The first argument Accept is the name of the header being set, and the second argument 'application/json' is the value of the header. In this case, the header is indicating that the client (the browser making the request) can accept JSON responses from the server.
Setting the Accept header to 'application/json' is a common practice when making AJAX requests, as it indicates to the server that the client expects a JSON response. If the server is capable of returning a JSON response, it will do so, and if not, it may return a different response type or an error.
By setting the Accept header to 'application/json', the client is able to handle the JSON response in a way that makes it easy to extract the data it needs, for example, by using the JSON.parse() method to convert the response into a JavaScript object. 
*/