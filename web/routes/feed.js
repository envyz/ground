var fs = require('fs'),
	https = require("https"),
	cheerio = require("cheerio");

// github의 feed를 json으로 저장한다. 
// feed.ejs에서 json 데이터를 불러와 리스트를 보여준다. 
var file = './data/feedlist.json',
	username = "soynote",
	options = {
		host: 'github.com',
		path: '/organizations/envyz/' + username + '.private.atom?token=AGvXZVOmjWOZJVWrYGTfVyh16DQoN2wsks60biUUwA==',
		method: 'GET'
	};
 
var request = https.request(options, function (response) {
	var body = '';

	response.on("data", function (chunk) {
		body += chunk.toString('utf8');
	});
 
	response.on("end", function () {
		var $ = cheerio.load(body);
		var feedlist = [{}];
		$("entry").each(function () {
			var item = {
				id : $(this).find('id').text(),
				published : $(this).find('published').text(),
				updated : $(this).find('updated').text(),
				link : $(this).attr("href"),
				title : $(this).find('title').text(),
				author : $(this).find('author name').text()
			}
			feedlist.push(item);	
		});

		fs.writeFile(file, JSON.stringify(feedlist, null, 4), function(err){
			console.log('file successfully written!')
		});
	});
});
 
// 2. 파일 생성

fs.open(file,'w',function(err, fd){
	if (err) throw err;
 	console.log('file open complete');
});

// 7.파일 이어서 쓰기
// fs.appendFile('test1.txt', 'data to append', function (err) {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });

//request.end();
