var express = require('express');
var router = express.Router();

/* GET games page. */
router.get('/', function(req, res, next) {
  res.render('games', { title: 'Game Page' });
});

module.exports = router;
