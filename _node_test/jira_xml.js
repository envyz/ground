var https = require("https"),
    cheerio = require("cheerio");
var issue = "WPR-2164",
    username = "envyz710",
    password = "envyz111)";
 
var options = {
  host: 'jira.ebaykorea.com',
  path: '/si/jira.issueviews:issue-xml/' + issue + '/' + issue + '.xml',
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
    console.log("title: ", $('item title').text());
    console.log("link: ", $('item link').text());
    console.log("key: ", $('item key').text());
    console.log("type: ", $('item type').text());
    console.log("priority: ", $('item priority').text());
    console.log("status: ", $('item status').text());
    console.log("assignee: ", $('item assignee').text());
    console.log("reporter: ", $('item reporter').text());
    console.log("created: ", $('item created').text());
    console.log("updated: ", $('item updated').text());
    console.log("component: ", $('item component').text());
    console.log("timespent: ", $('item timespent').text());
  });
});
 
request.end();