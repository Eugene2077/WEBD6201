console.log('Express server running on port 8000');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('GET request to the homepage');
    res.sendStatus(200);
    res.send('Hello from Express');
});

app.listen(8000, () => console.log('Express server is running on port 8000'));