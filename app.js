// SIT323 - Task 2.1P Step by Step Instructions
// 1. Module express was imported to create the server and route handling.
// 2. The function addTwoNumber() was created which adds two numbers, n1 and n2, and returns a result.
// 3. An API route was defined in the app.get() method as it takes two query parameters, n1 and n2, adds them using the addTwoNumber function, and returns the result as JSON.
// 4. An index.html file was also created in the public folder where it is defined as the homepage route as "/".
// 5. The server is set to start at port 3000 using the app.listen() method.
// 6. To see the website, run the command "node app.js" in the IDE terminal and open the browser at "http://localhost:3000".

const express = require('express');
const app = express();

// Function to add two numbers
const addTwoNumber = (n1, n2) => {
    return n1 + n2;
}

// Route to handle the form submission and calculate the sum
app.get("/addTwoNumber", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumber(n1, n2);
    res.json({statuscode: 200, data: result});
});

// Route to serve the index.html page
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Set the port and start the server
const port = 3000;
app.listen(port, () => {
    console.log("The website is running on http://localhost:" +port);
});
