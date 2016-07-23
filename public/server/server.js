var express = require('express');
var server = express();
// var firebase = require('firebase');

// var defaultHeaders = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept",
//   "access-control-max-age": 10, // Seconds.
//   'Content-Type': "application/json"
// };

server.options('/', function(req, res) {
  console.log('options successful');
  res.status(200);
});

server.get('/', function (req, res) {
  console.log('GET REQUEST');

  database.ref('/sounding-out/').once('value').then(function(snapshot) {
    soundingOut = snapshot.val();
    console.log('sounding out: ', soundingOut);
    res.status(200).json(soundingOut);
  });
});

server.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});