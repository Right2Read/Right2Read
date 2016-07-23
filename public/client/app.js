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

// Sounding Out Data
var soundingOutData, soundSymbol, nonsenseWords;

database.ref('/sounding-out/').once('value').then(function(snapshot) {
  soundingOutData = snapshot.val();
  console.log('sounding out data: ', soundingOutData);
  // res.status(200).json(soundingOut);
  soundSymbol = soundingOutData['sound-symbol'];
  nonsenseWords = soundingOutData['nonsense-words'];


  for (var i = 0; i < nonsenseWords.length; i++) {
    $('#flashcard').prepend('<h1>' + nonsenseWords[0] + '</h1>');


  }





});



$('#nonsenseScoring').hide();

$('#nextButton').click(function() {
  console.log('Next button clicked');
  $('#nonsenseScoring').show();
  $('#flashcard').hide();
});


// var app;

// $(function() {
//   app = {
//     server: server,

//     getData: function() {
//       console.log('Client GET request');
//       $.ajax({
//         url: app.server,
//         type: 'GET',
//         contentType: 'application/json',
//         success: function(data) {
//           console.log('GET successful');
//           console.log('data', data)
//         },
//         error: function(data) {
//           console.error('GET error');
//         }
//       });
//     }
//   }
// }());