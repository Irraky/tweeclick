# Tweeclick

This Application stream tweets with a given hashtag. When the user clicks on a tweet, it explodes and the user gains some points.

## 	Installation

You will need <a href="https://nodejs.org/en/download/">Node.js</a>.
Open Node.js, clone the repo and go into it:
```
git clone https://github.com/Irraky/tweeclick.git tweeclick
cd tweeclick
```

Install the dependencies with the command "npm install".

Insert your twitter API keys in "settings.default.json":
```
	"data": {
		"consumerKey": "",
		"consumerSecret": "",
		"token": "",
		"tokenSecret": ""
	}
```
You can get API key by creating an app on twitter (https://apps.twitter.com/app/)

## Launch the application

Launch the application with the command:
```
npm start
```
or
```
yarn start
```

Then, open your browser and go to "http://localhost:8080"

## Setting Hashtag

A default hashtag is used.
To set the hashtag, open "settings.json".
Replace the value next to the key "hashtag" by the one that you want to follow.
Example:
```
"hashtag": "2018"
```

TIP: you will need to restart the app to update the hashtag.
