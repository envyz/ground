var fs = require("fs");

function mergeValues(values, content) {
	for(var key in values) {
		content = content.replace("{{"+ key +"}}", values[key]);
	}
	return content;
}

function view(templateNmae, valuse, response) {
	var fileContents = fs.readFileSync('./assets/include/' + templateNmae + ".html", {encoding: "utf-8"});
	fileContents = mergeValues(values, fileContents);

	// fs.readFile('./views/' + templateNmae + ".html", function(error, fileContents) {
	// 	if (error) throw error;
	// 	response.write(fileContents);
	// });
	
}

module.exports.view = view;