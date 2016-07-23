var server = 'http://127.0.0.1:5000/';
// var server = 'https://right2read-9ebcd.firebaseapp.com/';

var app;

$(function() {
  app = {
    server: server,

    getData: function() {
      console.log('Client GET request');
      $.ajax({
        url: app.server,
        type: 'GET',
        contentType: 'application/json',
        success: function(data) {
          console.log('GET successful');
          console.log('data', data)
        },
        error: function(data) {
          console.error('GET error');
        }
      });
    }
  }
}());

$('#nonsenseScoring').hide();

$('#nextButton').click(function() {
  console.log('Next button clicked');
  $('#nonsenseScoring').show();
  $('#flashcard').hide();
  app.getData();
});