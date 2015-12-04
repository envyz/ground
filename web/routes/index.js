var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Ground' });
});

router.get('/profile', function(req, res, next) {
	// if (!req.user || req.user.status !== 'ENABLED') {
	// 	return res.redirect('/login');
	// }
	res.render('profile', {title: '프로필 - Ground', user: req.user});
});

router.get('/login', function(req, res, next) {
	res.render('login', { title: 'Ground' });
});

router.get('/register', function(req, res, next) {
	res.render('register', { title: 'Ground' });
});

var todoItems = [
	{id : 1, desc :'foo'},
	{id : 2, desc :'test'},
	{id : 3, desc :'bar'}
];
router.get('/feed', function(req, res, next) {
	//feed.js 파일을 실행하고 /data/feedlist.json 파일을 불러와서 리스트로 불러올 수 있게 한다. 
	res.render('feed', { title: 'Ground', 
		items : todoItems
	});
});
router.post('/feed_add', function(req, res, next) {
	var newItem = req.body.newItem;
	//console.log(newItem);
	todoItems.push({
		id : todoItem.length +1,
		desc : newItem
	});
	res.redirect('/');
});

module.exports = router;
