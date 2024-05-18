require('dotenv').config();
const express = require('express');
const fileRoutes = require('./routes/Routes');

//creates express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use("/api/routes",fileRoutes);

//listen for requests
app.listen(process.env.PORT, () => {
    console.log("Server is listening on port 4000!");
})

