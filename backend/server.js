require('dotenv').config();
const express = require('express');

//creates express app
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.get('/', (req, res) => {
    res.json({message: "Welcome to the IAC!"});
})

//listen for requests
app.listen(process.env.PORT, () => {
    console.log("Server is listening on port 4000!");
})

