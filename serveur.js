const settings = require('standard-settings').getSettings();
var fs = require('fs');
var util = require('util');

var http = require('http');


var Twitter = require('node-tweet-stream');
var stream = new Twitter({
    consumer_key: settings.data.consumerKey,
    consumer_secret: settings.data.consumerSecret,
    token: settings.data.token,
    token_secret: settings.data.tokenSecret
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
server.listen(settings.server.port);

io.sockets.on('connection', function (socket) {
	console.log('Welcome!');
    console.log('To access the game, go to http://localhost:' + settings.server.port);
    console.log('If you don\'t set the hashtag, the default will be used');
    console.log('Actual hashtag: ' + settings.follow.hashtag);
    console.log('Enjoy ~');
});


if (settings.follow.hashtag && settings.follow.hashtag !== null)
{
	stream.track('#' + settings.follow.hashtag);
}
else
{
	stream.track('#macron');
}

stream.on('tweet', function (data) {
	  if (data.coordinate !== null)
	  {
		  var tweet = {"name": data.user.screen_name, "text": data.text};
		  io.sockets.emit('newTweet', tweet);
	  }
});

stream.on('error', function (err) {
  console.log('Got an error sir.');
});
