var server = 'http://127.0.0.1:5000/';
// var server = 'https://right2read-9ebcd.firebaseapp.com/';

var app;

var numberOfAutomaticCorrect = 0;
var numberOfLaboredCorrect = 0;
var numberOfLaboredWrong = 0;
var numberOfAutomaticWrong = 0;
var numberOfDidntTry = 0

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

$('.nextButton').click(function() {
  console.log('Next button clicked');
  $('#nonsenseScoring').show();
  $('#flashcard').hide();
  app.getData();
});

$('.button1').click(function() {
  numberOfAutomaticCorrect++;
  console.log("Num of Auto Correct " + numberOfAutomaticCorrect);
  $('#nonsenseScoring').hide();
  $('#flashcard').show();
})

$('.button2').click(function() {
  numberOfLaboredCorrect++;
  console.log("Num of Labored Correct " + numberOfLaboredCorrect);
  $('#nonsenseScoring').hide();
  $('#flashcard').show();
})

$('.button3').click(function() {
  numberOfLaboredWrong++;
  console.log("Num of Labored Wrong " + numberOfLaboredWrong);
  $('#nonsenseScoring').hide();
  $('#flashcard').show();
})

$('.button4').click(function() {
  numberOfAutomaticWrong++;
  console.log("Num of Auto Wrong " + numberOfAutomaticWrong);
  $('#nonsenseScoring').hide();
  $('#flashcard').show();
})

$('.button5').click(function() {
  numberOfDidntTry++;
  console.log("Num of Didnt Try " + numberOfDidntTry);
  $('#nonsenseScoring').hide();
  $('#flashcard').show();
})














