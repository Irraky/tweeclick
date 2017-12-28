var fs = require('fs');
var util = require('util');
var ini = require('ini');
var http = require('http');
var file = fs.readFileSync('./config.ini', 'utf-8');
var config = ini.parse(file);

var Twitter = require('node-tweet-stream');
var stream = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    token: '',
    token_secret: ''
});

var server = http.createServer(function(req, res) {
    var page;
    if (req.url === '/') {
        page = "./client.html";
    } else {
        page = '.' + req.url;
    }
    if (fs.existsSync(page))
    {
        fs.readFile(page, 'utf-8', function(error, content) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(content);
        });
    }
});

var io = require('socket.io').listen(server);
server.listen(8080);

io.sockets.on('connection', function (socket) {
	console.log('An user signed in!');
});


if (config.hashtag && config.hashtag !== null)
{
	stream.track('#' + config.hashtag);
}
else
{
	stream.track('#noël');
}

stream.on('tweet', function (data) {
	  console.log('tweetReceived', data.text);
	  if (data.coordinate !== null)
	  {
		  var tweet = {"name": data.user.screen_name, "text": data.text};
		  io.sockets.emit('newTweet', tweet);
	  }
});

stream.on('error', function (err) {
  console.log('Got an error sir.');
});
