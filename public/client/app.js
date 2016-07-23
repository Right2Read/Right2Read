var server = 'http://127.0.0.1:5000/';
// var server = 'https://right2read-9ebcd.firebaseapp.com/';

// Firebase config
var config = {
  apiKey: "AIzaSyCtXDxTtW58S-Os2uSizY35nf1ajABm6eU",
  authDomain: "right2read-9ebcd.firebaseapp.com",
  databaseURL: "https://right2read-9ebcd.firebaseio.com",
  storageBucket: "right2read-9ebcd.appspot.com"
};
firebase.initializeApp(config);

var database = firebase.database();

var app;

$(function() {
  app = {
    server: server,

    getData: function() {
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

$('#nextButton').click(function() {
  console.log('Next button clicked');
  app.getData();
});


