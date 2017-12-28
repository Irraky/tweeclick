# Tweeclick

This Application stream tweets with a given hashtag. When the user clicks on a tweet, it explodes and the user gains some points.

## 	Installation

You will need <a href="https://nodejs.org/en/download/">Node.js</a>.
Open Node.js, clone the repo and go into it:
```
git clone https://github.com/Irraky/tweeclick.git tweeclick
cd tweeclick
```

Install the dependencies:
```
npm install socket.io
npm install ini
npm install node-tweet-stream
```

Insert your twitter API keys in "serveur.js" (line 10-13):
```
var stream = new Twitter({
	consumer_key: '<YOUR CONSUMER KEY HERE>',
    consumer_secret: '<YOUR CONSUMER SECRET HERE>',
    token: '<YOUR TOKEN HERE>',
    token_secret: '<YOUR TOKEN SECRET HERE>'
});
```
You can get API key by creating an app on twitter (https://apps.twitter.com/app/)

## Launch the application

Launch the application with the command:
```
node serveur.js
```

Then, open your browser and go to "http://localhost:8080"

## Setting Hashtag

To set the hashtag, open "config.ini".
Replace the value next to the key "hashtag=" by the one that you want to follow.
Example:
```
hashtag = 2018
```

TIP: you will need to restart the app to update the hashtag.
