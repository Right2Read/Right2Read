var express = require('express');
var server = express();

var defaultHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

server.options('/', function(req, res) {
  console.log('options successful');
  res.status(200);
});

server.get('/', function (req, res) {
  var responseData = {
    'text' : 'Hello Right2Read',
    'status' : 'successful'
  };

  console.log('response data', responseData);
  res.status(200).json(responseData);
});

server.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});