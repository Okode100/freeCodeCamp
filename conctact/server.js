const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Endpoint to handle form submissions
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    // Save the data to a JSON file (or you can connect to a database here)
    const data = { name, email, message };
    fs.appendFile('messages.json', JSON.stringify(data) + '\n', (err) => {
        if (err) {
            return res.status(500).send('Error saving message');
        }
        res.send('Message saved successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
