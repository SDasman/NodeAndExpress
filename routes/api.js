var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
  	res.send(JSON.stringify({'test':123}));
});

// router.get('/mongo', function(req, res, next) {
// 	var db = req.db;
// 	db.collection("inventory").find({"name":"apple"}).toArray(function(err,docs){
// 		res.setHeader('Content-Type', 'application/json');
// 		res.send(JSON.stringify(docs));	
// 	});
// });

router.post('/evenOrOdd', function(req, res, next) {
	if(req && req.body && req.body.numberInput && !isNaN(req.body.numberInput)){
		var input = parseInt(req.body.numberInput);
		var output = input%2?"odd":"even";
		res.setHeader('Content-Type', 'application/json');
  		res.send(JSON.stringify({'output':output,"input":input}));
	} 
	else if(req && req.body && req.body.numberInput && isNaN(req.body.numberInput)) {
		res.setHeader('Content-Type', 'application/json');
  		res.send(JSON.stringify({'error':req.body.numberInput + " is not a number"}));
	} else {
		res.setHeader('Content-Type', 'application/json');
  		res.send(JSON.stringify({'error': "'numberInput' not provided"}));
	}
});

module.exports = router;