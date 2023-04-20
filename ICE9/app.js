const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');

// pre-app confguration
dotenv.config({ path: './precess.env' });
const PORT = process.env.PORT || 3000;

// create app
const app = express();

// app configuration
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', partialsDir: './views/partials', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//routes
app.use('/', require('./routes/user'));

// start app
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

