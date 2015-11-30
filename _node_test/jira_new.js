var https = require("https"),
		cheerio = require("cheerio");
var issue = "17718",
		username = "envyz710",
		password = "envyz111)";
 
var options = {
	host: 'jira.ebaykorea.com',
	path: '/sr/jira.issueviews:searchrequest-xml/' + issue + '/SearchRequest-' + issue + '.xml?tempMax=50',
	method: 'GET',
	headers: {
		'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64'),
		'user-agent': 'node.js'
	}
};
 
var request = https.request(options, function (response) {
	var body = '';
	response.on("data", function (chunk) {
		body += chunk.toString('utf8');
	});
 
	response.on("end", function () {
		var $ = cheerio.load(body);
		var key, title, link, type, priority, status, assignee, reporter, created, updated, component, timespent;
		var json = { key : "", title : "", link : "", type : "", priority : "", status : "", assignee : "", reporter : "", created : "", updated : "", component : "", timespent : ""};
		//console.log("title: ", $('item').length);
		$("item").each(function () {
			console.log("key: ", $(this).find('key').text());      
			console.log("summary: ", $(this).find('summary').text());
			console.log("link: ", $(this).find('link').text());
			console.log("type: ", $(this).find('type').text());
			console.log("priority: ", $(this).find('priority').text());
			console.log("status: ", $(this).find('status').text());
			console.log("assignee: ", $(this).find('assignee').text());
			console.log("reporter: ", $(this).find('reporter').text());
			console.log("created: ", $(this).find('created').text());
			//console.log("updated: ", $(this).find('updated').text());
			console.log("component: ", $(this).find('component').text());
			console.log("timespent: ", $(this).find('timespent').text());
			// json.key = $(this).find('key').text();
			// json.title = $(this).find('title').text();
			// json.link = $(this).find('link').text();
			// json.type = $(this).find('type').text();
			// json.priority = $(this).find('priority').text();
			// json.status = $(this).find('status').text();
			// json.assignee = $(this).find('assignee').text();
			// json.reporter = $(this).find('reporter').text();
			// json.created = $(this).find('created').text();
			// json.updated = $(this).find('updated').text();
			// json.component = $(this).find('component').text();
			// json.timespent = $(this).find('timespent').text();
		});
	});
});
 
request.end();

