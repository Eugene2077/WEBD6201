const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Meme route
app.get('/meme', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'meme.html'));
});

// Error route
app.get('/error', (req, res) => {
  res.status(418).sendFile(path.join(__dirname, 'public', 'error.html'));
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
