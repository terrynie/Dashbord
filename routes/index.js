var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboad' });
});

router.get('/chart', function(req, res, next) {
	res.render('chart');
})

module.exports = router;
