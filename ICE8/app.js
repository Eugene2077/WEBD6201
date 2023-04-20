 // This imports the express module, which is a web framework for Node.js
const express = require('express');
// This imports the express-handlebars module, which is a view engine for 
//Express that uses Handlebars as the template language
const exphbs = require('express-handlebars');
const port = 3000;

// create an express app
const app = express();

// set up the Handlebars engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// express app.use() method
app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    req.myName = 'Eugene';
    next();
});

// make the index route
app.get('/', (req, res) => {
    res.render('home');
}); 

// add about route
app.get('/about', (req, res) => {
    // res.send(`About page for WEBD 6201. This is a new route!`);
});

// start the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});




