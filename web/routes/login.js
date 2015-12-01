var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('login', { title: 'Ground' });
// });

//post
router.post('/', function(req, res, next) {
  res.render('login', { title: 'Ground' });
});

module.exports = router;