var express = require('express');
var session = require('express-session');
var router = express.Router();

//app.use(session({secret: 'ssshhhhh'}));

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Ground', user : req.user });
}).post('/', function(req, res, next) {
	res.render('index', { title: 'Ground' });
});

router.get('/profile', function(req, res, next) {
	// if (!req.user || req.user.status !== 'ENABLED') {
	// 	return res.redirect('/login');
	// }
	res.render('account_profile', {title: '프로필 - Ground', user: req.user});
});

router.get('/login', function(req, res, next) {
	res.render('account_login', { title: 'Ground', user : req.user });
}).post('/login', function(req, res, next) {
	var post = req.body;
	if (post.user === 'izmare' && post.password === 'absolute') {
		req.session.user_id = sundars_user_id_here;
		//res.redirect('/my_secret_page');
		res.send('POST request to homepage');
	} else {
		res.send('Bad user/pass');
	}

	//res.render('account_login_result', { title: 'Ground', username: req.body.login-username, password: req.body.login-password });

	// if (req.body.username && req.body.username === 'user' && req.body.password && req.body.password === 'pass') {
	// 	req.session.authenticated = true;
	// 	res.redirect('/index');
	// } else {
	// 	req.flash('error', 'Username and password are incorrect');
	// 	res.redirect('/login');
	// }
});

router.get('/lock', function(req, res, next) {
	res.render('account_lock', { title: 'Ground' });
});

router.get('/reminder', function(req, res, next) {
	res.render('account_reminder', { title: 'Ground' });
});

router.get('/register', function(req, res, next) {
	res.render('account_register', { title: 'Ground' });
});


router.get('/add_task', function(req, res, next) {
	res.render('human_add_task', { title: 'Todo - Ground' });
});
router.get('/calendar', function(req, res, next) {
	res.render('human_calendar', { title: 'Calendar - Ground' });
});
router.get('/report', function(req, res, next) {
	res.render('human_report', { title: 'Report - Ground' });
});

router.get('/task', function(req, res, next) {
	res.render('human_task', { title: 'Task - Ground' });
});

router.get('/add_task', function(req, res, next) {
	res.render('human_add_task', { title: 'Task - Ground' });
});

// router.get('/task_check', function(req, res, next) {
// 	res.render('_human_task_check', { title: 'task_check - Ground' });
// });

// router.get('/task_section', function(req, res, next) {
// 	res.render('_human_task_section', { title: 'task_section - Ground' });
// });

router.get('/todo', function(req, res, next) {
	res.render('human_todo', { title: 'Todo - Ground' });
});

var todoItems = [
	{id : 1, desc :'foo'},
	{id : 2, desc :'test'},
	{id : 3, desc :'bar'}
];
router.get('/feed', function(req, res, next) {
	//feed.js 파일을 실행하고 /data/feedlist.json 파일을 불러와서 리스트로 불러올 수 있게 한다. 
	//res.json();
	res.render('human_feed', { title: 'Ground', 
		items : todoItems
	});
}).post(function(req, res, next) {
	var newItem = req.body.newItem;
	//console.log(newItem);
	todoItems.push({
		id : todoItem.length +1,
		desc : newItem
	});
	res.redirect('/');
});


router.get('/approval', function(req, res, next) {
	res.render('approval_approval', { title: '전자결재 - Ground' });
});
router.get('/payslip', function(req, res, next) {
	res.render('approval_payslip', { title: '급여명세서 - Ground' });
});

module.exports = router;
