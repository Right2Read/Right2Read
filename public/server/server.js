var express = require('express');
var server = express();

// PDFJS.getDocument('helloworld.pdf').then(function(pdf) {
//   // you can now use *pdf* here
// });

// pdf.getPage(1).then(function(page) {
//   // you can now use *page* here
// });

var canvas = document.getElementById('the-canvas');
var context = canvas.getContext('2d');
canvas.height = viewport.height;
canvas.width = viewport.width;

var renderContext = {
  canvasContext: context,
  viewport: viewport
};
page.render(renderContext);

server.options('/', function(req, res) {
  console.log('options successful');
  res.status(200);
  res.send(null);
});

server.get('/', function (req, res) {
  console.log('GET REQUEST');
  res.status(200);
  res.send('Hello World');

  // database.ref('/sounding-out/').once('value').then(function(snapshot) {
  //   soundingOut = snapshot.val();
  //   console.log('sounding out: ', soundingOut);
  //   res.status(200).json(soundingOut);
  // });
});

server.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});


// var firebase = require('firebase');

// var defaultHeaders = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept",
//   "access-control-max-age": 10, // Seconds.
//   'Content-Type': "application/json"
// };