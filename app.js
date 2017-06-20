var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const port = 3000;

Posts = require('./models/posts');

//connect to mongoose
mongoose.connect('mongodb://localhost/twblogdb');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send("Please use /api/books/");
});

app.get('/api/posts', function(req, res){
	Posts.getPosts(function(err, posts){
		if(err){
			throw err;
		}
		res.json(posts);
	});
	
});

app.listen(port, function(){
	console.log("Server listening on port " + port);
});