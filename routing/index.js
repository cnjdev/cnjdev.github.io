var express = require('express');
var router = express.Router();

var request = require("request");
var cheerio = require("cheerio");

// get articles that aren't saved yet
router.get("/", function(req, res) {
	res.json("Hello World!");
});