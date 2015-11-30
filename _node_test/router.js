var renderer = require("./renderer.js");

function home(request, response) {
	if (request.url === "/") {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		renderer.view("header", {}, response);
		response.write('body\n');
		response.end('footer\n');
	}
}

function user(request, response){
	var username = request.url.replace("/","");
	if (username.length >0) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('head-css\n');
		response.write('head-meta\n');
		response.write('page-header\n');
		response.write(username + '\n');
		response.end('page-footer\n');
	};
}

module.exports.home = home;
module.exports.user = user;
