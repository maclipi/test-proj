 var express = require('express');
var http = require('http');
var path = require('path');
var twit = require('twitter');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var staticRoot = __dirname;
var twitter = new twit({
  consumer_key: '0RIfIXExdMm9FyDntSLVUcdGw',
  consumer_secret: 'TMgXyfK4CpdICoRYXcBgmoSPp4IntjZ6bCYshe2OhTnz1J24Ca',
  access_token_key: '794910928076537856-jdYLprWx6sZJ5JSzZWBg39NaDHj8hhe',
  access_token_secret: 'Bh5uFhnfMYCfCnJniFANMNugh6vnDPk67xuufnCGwG5Ue'

});

app.set('port', (port));
app.use(express.static(staticRoot));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

var server = http.createServer(app).listen(port, function() {
  console.log('Server listening on port ' + port);
});

var io = require('socket.io').listen(server);

app.get('/stream', function(req, res, next) {

  var searchquery = "hello";

  twitter.stream('statuses/filter', {track: "hello"}, function(stream) {
    stream.on('data', function(data) {

      data.location = data.geo ? data.geo.coordinates:[];

      var tweet ={
        created_at : data.created_at,
        text:data.text,
        username:data.user.screen_name,
        followers_count: data.user.followers_count,
        following_count: data.user.friends_count,
        statuses_count: data.user.statuses_count,
        profile_image_url:data.user.profile_image_url,
        coordinates:data.location
      };
      io.emit('tweet', tweet);
      console.log(tweet.text);
      io.send(tweet);
      
    });

    stream.on('error', function(error) {
      throw error;
    });
  });
});
