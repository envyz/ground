var request = require('request'),
	cheerio = require('cheerio');

var url = "";

request({
    method: 'POST',
    url: 'https://jira.ebaykorea.com/issues/?filter=17065',
    headers: {
        'User-Agent': 'Super Cool Browser' // optional headers
     }
}, function (err, response, body) {
    if (err) return console.error(err);
	if (!err) {
		var $ = cheerio.load(body);

		console.log($(".list-view").length);

		// 블로그 title 정보 가져오기
		$("#content").each(function () {
			var post = {"title": "", "link": ""};
			var data = $(this);
			
			// post["title"] = data.text();
			post["link"] = data.attr("href");
			//console.log(post["link"]);
		});
	}
})


// request(url, function (err, res, xml) {
// 	if (!err) {
// 		var $ = cheerio.load(xml);
// 		//console.log($("#content .navigator-group").html())
// 		console.log($("item").length)

// 		// 블로그 title 정보 가져오기
// 		$("item").each(function () {
// 			var post = {"title": "", "link": "", "pubDate": "", "author": "", "guid": ""};
// 			var data = $(this);
			
// 			post["title"] = data.find("title").text();
// 			post["link"] = data.find("link").text();
// 			post["pubDate"] = data.find("pubDate").text();
// 			post["author"] = data.find("author").text();
// 			post["guid"] = data.find("guid").text();
// 			console.log(post);
// 		});
// 	}
// })