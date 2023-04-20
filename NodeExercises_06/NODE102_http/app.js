// imports the http module and put it in a variable called http
const http = require('http');
const PORT = 3000;

// createServer() is a method that creates a server obuject('server')
// it takes a callback function that takes two parameters('req', 'res')
// The 'req' parameter represents the incoming request from the client
// The 'res' parameter represents the outgoing response from the server
const server = http.createServer((req, res) => {
    // The callback function writes a response header with a status code of 200 (OK) and a content type of text/plain. 
    //Then it writes a response body with some text and ends the response.


	// PART 1
	// console.log(req);
	// console.log(`URL: ${req.url} METHOD: ${req.method}`);
	// console.log(JSON.stringify(req.headers));
	// process.exit();

	// PART 2
	res.setHeader('Content-Type', 'text/html');
	res.write(`<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>NODE 102 - Server!</title>
                    </head>
                    <body>
                        <h1>This is a unique header to see when the server spins up~~!</h1>
                    </body>
                </html>`);
	res.end();
});

// The server object listens on port 3000
server.listen(PORT, '127.0.0.1');
