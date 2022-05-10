// Importing the essentials

const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const morgan = require("morgan");

// Mongodb connection
/*
mongodbURI = "";
mongoose.connect(mongodbURI);
*/

// Setting the view engine to ejs
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));

// Routes

app.get("/", (req, res) => {
    res.render("index");
})

// Listening to the server
app.listen(3000, () => {
    console.log("Server is running...");
})
