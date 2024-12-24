// Import required modules
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define a port for the server
const PORT = 3000;

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('<h1>This is a sample Node.js project</h1>');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

