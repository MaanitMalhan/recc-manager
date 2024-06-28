//FIGURE OUT HOW TO USE ARC CODES AS ID 

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const reccRoutes = require('./routes/routes');
const userRoutes = require('./routes/user');

//creates express app
const app = express();

//middleware
app.use(express.json());


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use("/api/reccs",reccRoutes);
app.use("/api/user", userRoutes);


//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to mongoDB!");
        //listen for requests
        app.listen(process.env.PORT, () => {
        console.log("Connected to mongoDB and listening on port 4000!");
        })
    })
    .catch((err) => {
        console.log(error);
    })


