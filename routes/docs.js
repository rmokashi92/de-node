var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	var db = req.db;
	var collection = db.get('docs');
	collection.find({},{},function(e,docs){
		res.render('docs',{
			"docs":docs
		})
	});
});

module.exports = router;