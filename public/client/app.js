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

  var wordCounter = 0;
  showFlashcard();

  function showFlashcard() {
    $('#nonsenseScoring').hide();

    if (wordCounter < nonsenseWords.length) {
      $('#flashcard').prepend('<h1>' + nonsenseWords[wordCounter] + '</h1>');
      $('#question').show();
      wordCounter++;
    } else {
      showSoundingOutSummary();
    }

  }

  $('.nextButton').click(function() {
    console.log('Next button clicked');
    showTeacherRating();
    $('#flashcard h1').remove();
  });

  function showTeacherRating() {
    $('#question').hide();
    $('#nonsenseScoring').show();
  }

  $('.button1').click(function() {
    numberOfAutomaticCorrect++;
    console.log("Num of Auto Correct " + numberOfAutomaticCorrect);
    showFlashcard();
  })

  $('.button2').click(function() {
    numberOfLaboredCorrect++;
    console.log("Num of Labored Correct " + numberOfLaboredCorrect);
    showFlashcard();
  })

  $('.button3').click(function() {
    numberOfLaboredWrong++;
    console.log("Num of Labored Wrong " + numberOfLaboredWrong);
    showFlashcard();
  })

  $('.button4').click(function() {
    numberOfAutomaticWrong++;
    console.log("Num of Auto Wrong " + numberOfAutomaticWrong);
    showFlashcard();
  })

  $('.button5').click(function() {
    numberOfDidntTry++;
    console.log("Num of Didn't Try " + numberOfDidntTry);
    showFlashcard();
  });
});

var app;

var numberOfAutomaticCorrect = 0;
var numberOfLaboredCorrect = 0;
var numberOfLaboredWrong = 0;
var numberOfAutomaticWrong = 0;
var numberOfDidntTry = 0

function showSoundingOutSummary() {
  console.log('Summary');
  var range = [
    [0, 5],
    [6, 8],
    [9, 15]
  ];
  var score = ['Weak', 'Ok', 'Strong'];
  var result = numberOfAutomaticCorrect + Math.floor(numberOfLaboredCorrect * .5);

  for (var i = 0; i < range.length; i++) {
    var lowEnd = range[i][0];
    var highEnd = range[i][1];

    if (result > lowEnd && result < highEnd) {
      console.log(score[i], result);
      return;
    }
  }
}





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