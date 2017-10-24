var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
  	res.send(JSON.stringify({'test':123}));
});

module.exports = router;