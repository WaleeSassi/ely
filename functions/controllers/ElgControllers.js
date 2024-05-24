const Customer = require('../models/loans');

exports.getPersons = (req, res, next) => {
	// return array of existing posts
	Customer.find().then((foundPosts) => {
		console.log(res);
		res.json({
			message: 'All posts',
			posts: foundPosts,
		});
	});
};
