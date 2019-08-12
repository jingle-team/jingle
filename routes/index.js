var express = require('express');
var router = express.Router();
var mongoUtil = require( '../mongoUtil' );
var db = mongoUtil.getDb();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(db)
  res.render('index', { title: 'Jingle App', databaseTest: db});
});

module.exports = router;
