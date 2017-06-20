var mongoose = require('mongoose');

// Posts schema

var postSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description:{
		type: String,
		default: "This post has no description"
	},
	content:{
		type: String,
		required: true
	},
	date_created:{
		type: Date,
		default: Date.now
	},
	tags:{
		type: String,
		default: "untagged"
	},
	date_edited:{
		type: Date,
		default: Date.now
	}
});

var Posts = module.exports = mongoose.model('Posts', postSchema);

// get posts
module.exports.getPosts = function(callback, limit){
	Posts.find(callback).limit(limit);
}