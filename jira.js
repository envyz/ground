var https = require("https"),
    cheerio = require("cheerio");
var issue = "WPR-2164",
    username = "envyz710",
    password = "envyz111)";
 
var options = {
  host: 'jira.ebaykorea.com',
  path: '/browse/' + issue,
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
    console.log("components: ", $('#components-field>a').text()); //GP, GG, G9
    console.log("Type: ", $('#type-val').text()); // BC, DR
    console.log("URL: ", $('.issue-link').attr("href"));
    console.log("title: ", $('#summary-val').text());
    console.log("Status: ", $('#status-val').text());
    console.log("assignee: ", $('#assignee-val span').attr('rel'));
    console.log("reporter: ", $('#reporter-val').text());
    console.log("create: ", $('#create-date time').attr("datetime"));
    console.log("updated: ", $('#updated-date time').attr("datetime"));
  });
});
 
request.end();