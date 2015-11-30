// var express = require("express"),
// 	ssi		= require("ssi"),
// 	path 	= require("path"),
// 	fs 		= require("fs"),
// 	app 	= express(),
	
// 	parser 		= new ssi(__dirname, "", "");
	
// // Handle server side includes for html files
// app.use(function(req,res,next) {
// 	var filename 	= __dirname+(req.path == "/" ? "/src/index.html" : req.path);

// 	//console.log(filename);

// 	if(fs.existsSync(filename)) {
// 		res.send(parser.parse(filename, fs.readFileSync(filename, {encoding: "utf8"})).contents);	
// 	} else {
// 		next();
// 	}
// });


// //app.listen(process.env.PORT || 3001)

// app.listen(5000);
// console.log("Server 5000");


var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});