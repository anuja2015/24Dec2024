// Import required modules
const express = require('express');

// Create an instance of an Express app
const app = express();

app.use(express.static('public'))

// Define a port for the server
const PORT = 3000;


// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

