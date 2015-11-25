var express = require("express");
var app = express();

// app.get('/', function(request, response){
//	response.send("hello world from server.js");
// });
app.use(express.static(__dirname + "/src"));

app.listen(5000);
console.log("Server 5000");