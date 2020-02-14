var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var logger = require("morgan");

var routing = require("./routing");

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Set Handlebars.
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Routes
app.use("/", routing);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});