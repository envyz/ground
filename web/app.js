var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : 'dpsqlwm!254',
  database : 'data'
});
dbConnection.connect();

dbConnection.query('select * from test', function (err, rows, fields) {
    console.log(rows);
});

// 만약, 조건값이 있다면?
// dbConnection.query('select * from test where id=?', [id] , function (err, rows, fields) {
//     console.log(rows);
// });

//dbConnection.end();

var routes = require('./routes/index');
var users = require('./routes/_blank');
var login = require('./routes/login');
var profile = require('./routes/profile');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/_blank', users);
app.use('/login', login);
app.use('/profile', profile);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
