$(document).ready(function() {
  // var server = 'http://127.0.0.1:5000/';
  var server = 'https://right2read-9ebcd.firebaseapp.com/';
  var type;
  var wordCounter = 0;

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
    soundSymbol = soundingOutData['sound-symbol'];
    nonsenseWords = soundingOutData['nonsense-words'];
  });

  $('#pdfButton').hide();

  $('#studentButton').click(function() {
    console.log('student button clicked');
    $('#studentButton').hide();
    $('#instructorButton').hide();
    $('#authButton').hide();
    $('#right2ReadLogo').hide();
    $('#readingImage').hide();
    type = 'student';
    showFlashcard();
  });

  $('#instructorButton').click(function() {
    console.log('instructor button clicked');
    $('#studentButton').hide();
    $('#instructorButton').hide();
    $('#authButton').hide();
    $('#readingImage').hide();
    showTeacherRating();
    type = 'instructor';
  });

  function showRecommendations() {
    $('#pdfButton').show();
    $('#videoRecommendations').show();
    $('#appRecommendations').show();
    $('#curriculumRecommendations').show();
    $('#programRecommendations').show();
  }

    // $('.nextButton').click(function() {
    //   console.log('Next button clicked');
    //   showTeacherRating();
    //   $('#flashcard h1').remove();
    // });

  function showTeacherRating() {
    // $('#question').hide();
    $('#nonsenseScoring').show();
  }

  //toggle value so the word on the student screen shows up
  function toggleValue() {
    var update = {
      'scoringComplete' : Math.random()
    }
    firebase.database().ref().update(update);
  }

  function wordsComplete() {
    var update = {
      'wordsComplete' : Math.random()
    }
    firebase.database().ref().update(update);
  }

  $('.button1').click(function() {
    toggleValue();
    numberOfAutomaticCorrect++;
    console.log("Num of Auto Correct " + numberOfAutomaticCorrect);
    // showFlashcard();
  });

  $('.button2').click(function() {
    toggleValue();
    numberOfLaboredCorrect++;
    console.log("Num of Labored Correct " + numberOfLaboredCorrect);
    // showFlashcard();
  });

  $('.button3').click(function() {
    toggleValue();
    numberOfLaboredWrong++;
    console.log("Num of Labored Wrong " + numberOfLaboredWrong);
    // showFlashcard();
  });

  $('.button4').click(function() {
    toggleValue();
    numberOfAutomaticWrong++;
    console.log("Num of Auto Wrong " + numberOfAutomaticWrong);
    // showFlashcard();
  });

  $('.button5').click(function() {
    toggleValue();
    numberOfDidntTry++;
    console.log("Num of Didn't Try " + numberOfDidntTry);
    // showFlashcard();
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
      }
    }

    $('#summary').show();
  }

  $('#authButton').text('Login');

  // $('#authButton').click(function() {
  //   $(this.text)('Login');
  // };

  $('#authButton').click(function() {
    console.log('Button value is ', $(this).val());

    if ($(this).val() === 'Logout') {
      console.log('Logging out');
      logout();
    } else {
      console.log('Login clicked');
      login();
    }
  });

  function login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      $('#authButton').text('Logout');
      console.log('logged in');


    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

      console.log(errorCode, errorMessage, email, credential);
    });
  }

  function logout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('Signout successful');
    }, function(error) {
      // An error happened.
      console.log(error);
    });
  }

  firebase.database().ref('/scoringComplete/').on('value', function(snapshot) {
    //updateStarCount(postElement, snapshot.val());
    console.log('Scoring state changed ', snapshot.val());
    showFlashcard();
  });

  firebase.database().ref('/wordsComplete/').on('value', function(snapshot) {
    //updateStarCount(postElement, snapshot.val());
    console.log('Words complete state changed ', snapshot.val());

    if (type === 'instructor') {
      $('#nonsenseScoring').hide();
      showSoundingOutSummary();
      showRecommendations();
    }
  });

  function showFlashcard() {
    // $('#nonsenseScoring').hide();
    if (wordCounter < nonsenseWords.length) {
      if (type === 'student') {
        $('#flashcard h5').remove();
        $('#flashcard').prepend('<h5>' + nonsenseWords[wordCounter] + '</h5>');
        $('#question').show();
        wordCounter++;
      }
    } else {
      wordsComplete();
    }

    console.log("type", type, 'word counter', wordCounter);
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
});
