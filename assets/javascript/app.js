
var i = 0; //check the number of times the timer rests.
var j = 0;
var counter;
var shortCounter;
var correct = 0;
var incorrect = 0;
var noAnswer = 0;

//Set of questions and answers.
var quiz = [
    {
     question:'Is Earth the only planet in the solar system where water can exist as liquid, and gas?',
     answer: ['Earth is the only planet in the solar system where water can exist as liquid, and gas.' , true],
     fake1:['Water exists as liquid, and gas on Neptune', false],
     fake2:['Earth is the only planet in the solar system where water can exist as liquid, and gas.', true],
     fake3:['Nope', false],
     fake4:['There are 3 planets in the solar system where water can exist as liquid, and gas.', false],
     image: 'assets/images/earth1.jpeg'
 	},
  {
     question:'What is the shape of the Earth?',
     answer: ['The Earth is slightly pear-shaped.', true],
     fake1:['Earth is a perfect sphere.', false],
     fake2:['Earth is a shaped like an oval.', false],
     fake3:['Earth is shaped like a banana.', false],
     fake4:['The Earth is slightly pear-shaped.', true],
     image: 'assets/images/shape.jpeg'
 	},
 	{
     question:"What is Jupiter's rotation period?",
     answer: ['Jupiter Astrofact:  Rotation period: 10 hours.', true],
     fake1:['Jupiter Astrofact:  Rotation period: 21 hours.', false],
     fake2:['Jupiter Astrofact:  Rotation period: 11 hours.', false],
     fake3:['Jupiter Astrofact:  Rotation period: 10 hours.', true],
     fake4:['Jupiter Astrofact:  Rotation period: 27 hours.', false],
     image: 'assets/images/jupiter.jpeg'
 	},
 	{
     question:'How many moons does Mars have?',
     answer: ['Mars has 2 small moons: Phobos and Deimos whose names mean "fear" and "panic".', true],
     fake1:['Mars Astrofact: Mars has 3 small moons.', false],
     fake2:['Mars Astrofact: Mars has no moons', false],
     fake3:['Mars Astrofact: Mars has 1 small moon.', false],
     fake4:['Mars has 2 small moons: Phobos and Deimos whose names mean "fear" and "panic".', true],
     image: 'assets/images/mars.jpeg'
 	},
 	{
     question:"What is Mercury's orbital period?",
     answer: ['Mercury orbits The Sun faster than any other planet: One year lasts just 88 Earth days.', true],
     fake1:['Mercury orbits The Sun faster than any other planet: One year lasts just 88 Earth days.', true],
     fake2:['It take 240 days to orbit the Sun.', false],
     fake3:['One year in Mercury lasts 390 Earth days.', false],
     fake4:['Mercury orbits The Sun in 100 days.', false],
     image: 'assets/images/meorbit.png'
 	},
 	{
     question:'How are days compared to years on Mercury?',
     answer: ['Days are longer than years on the planet Mercury.', true],
     fake1:['Years are longer than days.', false],
     fake2:['They are the same.', false],
     fake3:['Days are longer than years on the planet Mercury.', true],
     fake4:['Every two years days are shorter than years.', false],
     image: 'assets/images/mercury1.jpeg'
 	},
 	{
     question:'How many moons does Mercury have?.',
     answer: ['Moons: 0.', true],
     fake1:['Mercury has 3 small moons.', false],
     fake2:['Moons: 0.', true],
     fake3:['Mercury has 13 small moons.', false],
     fake4:['Mercury has 2 moons.', false],
     image: 'assets/images/mercury2.jpeg'
 	},
  {
     question:'How many moons does Neptune have?',
     answer: ['Neptune Astrofact: Moons: 13.', true],
     fake1:['Neptune Moons: 13.', true],
     fake2:['Neptune Moons: 43.', false],
     fake3:['Neptune Moons: 3.', false],
     fake4:['Neptune Moons: 33.', false],
     image: 'assets/images/neptune.jpeg'
     },
     {
     question:'How many moons does Saturn have?',
     answer: ['Saturn Astrofact: Moons: 62.  Of those 53 are named.', true],
     fake1:['Saturn Moons: 6.',false],
     fake2:['Saturn Moons: 42.',false],
     fake3:['Saturn Moons: 162.', false],
     fake4:['Saturn Moons: 62.  Of those 53 are named.', true],
     image: 'assets/images/saturn.png'
  },
];

//START BUTTON
$('#start').on('click', function(){
  $('#start').hide();
  timer.startTime();
  displayTimer();
  displayQuestion(i);//pass the question i when looping
  displayFake1(i);
  displayFake2(i);
  displayFake3(i);
  displayFake4(i);
});

// create screen1 with Boostrap in jquery format
//DISPLAYS QUESTION TO ASK
function displayQuestion(i){
  var row = $('<div>');
  row.attr('id', 'question');
  row.attr('class', 'row');

  var column1 = $('<div>')
  column1.attr('id', 'column1');
  column1.attr('class', 'col-lg-4');

  var column2 = $('<div>')
  column2.attr('id', 'column2');
  column2.attr('class', 'col-lg-4');
  column2.html('<h3>' + quiz[i].question + '</h3>');

  var column3 = $('<div>')
  column3.attr('id', 'column3');
  column3.attr('class', 'col-lg-4');
$('#wrapper').append(row);
$('#question').append(column1);
$('#column1').append(column2);
$('#column2').append(column3);
}

//DISPLAYS CHOICE1 TO ASK
function displayFake1(i){ //i
  var row = $('<div>');
  row.attr('id', 'fake1');
  row.attr('class', 'row');

  var column1 = $('<div>')
  column1.attr('id', 'column1Fake1');
  column1.attr('class', 'col-lg-4');

  var column2 = $('<div>')
  column2.attr('id', 'column2Fake1');
  column2.attr('class', 'col-lg-4');
  column2.attr('data-name', quiz[i].fake1[1]);
  column2.html('<h3>' + quiz[i].fake1[0]+ '</h3>');
  var column3 = $('<div>')
  column3.attr('id', 'column3Fake1');
  column3.attr('class', 'col-lg-4');
$('#choice1').append(row);
$('#fake1').append(column1);
$('#column1Fake1').append(column2);
$('#column32Fake1').append(column3);
// console.log($('#column2Fake1').attr("title"));//this is the value of true or false
}


//DISPLAYS CHOICE2 TO ASK
function displayFake2(i){ //i
  var row = $('<div>');
  row.attr('id', 'fake2');
  row.attr('class', 'row');

  var column1 = $('<div>')
  column1.attr('id', 'column1Fake2');
  column1.attr('class', 'col-lg-4');

  var column2 = $('<div>')
  column2.attr('id', 'column2Fake2');
  column2.attr('class', 'col-lg-4');
  column2.attr('data-name', quiz[i].fake2[1]);
  column2.html('<h3>' + quiz[i].fake2[0]+ '</h3>');
  var column3 = $('<div>')
  column3.attr('id', 'column3Fake2');
  column3.attr('class', 'col-lg-4');
$('#choice2').append(row);
$('#fake2').append(column1);
$('#column1Fake2').append(column2);
$('#column32Fake1').append(column3);
// console.log($('#column2Fake2').attr("title"));//this is the value of true or false
}

//DISPLAYS CHOICE3 TO ASK
function displayFake3(i){ //i
  var row = $('<div>');
  row.attr('id', 'fake3');
  row.attr('class', 'row');

  var column1 = $('<div>')
  column1.attr('id', 'column1Fake3');
  column1.attr('class', 'col-lg-4');

  var column2 = $('<div>')
  column2.attr('id', 'column2Fake3');
  column2.attr('class', 'col-lg-4');
  column2.attr('data-name', quiz[i].fake3[1]);
  column2.html('<h3>' + quiz[i].fake3[0]+ '</h3>');
  var column3 = $('<div>')
  column3.attr('id', 'column3Fake3');
  column3.attr('class', 'col-lg-4');
$('#choice3').append(row);
$('#fake3').append(column1);
$('#column1Fake3').append(column2);
$('#column32Fake3').append(column3);
// console.log($('#column2Fake3').attr("title"));//this is the value of true or false
}


//DISPLAYS CHOICE4 TO ASK
function displayFake4(i){ //i
  var row = $('<div>');
  row.attr('id', 'fake4');
  row.attr('class', 'row');

  var column1 = $('<div>')
  column1.attr('id', 'column1Fake4');
  column1.attr('class', 'col-lg-4');

  var column2 = $('<div>')
  column2.attr('id', 'column2Fake4');
  column2.attr('class', 'col-lg-4');
  column2.attr('data-name', quiz[i].fake4[1]);
  column2.html('<h3>' + quiz[i].fake4[0]+ '</h3>');
  var column3 = $('<div>')
  column3.attr('id', 'column3Fake4');
  column3.attr('class', 'col-lg-4');
$('#choice4').append(row);
$('#fake4').append(column1);
$('#column1Fake4').append(column2);
$('#column32Fake4').append(column3);
// console.log($('#column2Fake4').attr("title"));//this is the value of true or false
}

// ACCESS FAKE QUESTIONS ON CLICK
$('#choice1').on('click', function(){
  if (quiz[i].answer[1] === $('#column2Fake1').data("name")){
    timer.stop;
    timer.reset();
    eraseQuestions();
    displayCorrectAnswer();
    $('#display-time').hide();
    secondtimer.startTime();
    timer.checkCycles();

  } else {
    timer.stop;
    timer.reset();
    eraseQuestions();
    displayWrongAnswer();
    $('#display-time').hide();
    secondtimer.startTime();
    timer.checkCycles();
  }
});
$('#choice2').on('click', function(){
  if (quiz[i].answer[1] === $('#column2Fake2').data("name")){
    timer.stop;
    timer.reset();
    eraseQuestions();
    displayCorrectAnswer();
    $('#display-time').hide();
    secondtimer.startTime();
    timer.checkCycles();

  } else {
    timer.stop;
    timer.reset();
    eraseQuestions();
    displayWrongAnswer();
    $('#display-time').hide();
    secondtimer.startTime();
    timer.checkCycles();
  }
});
$('#choice3').on('click', function(){
  if (quiz[i].answer[1] === $('#column2Fake3').data("name")){
    timer.stop;
    timer.reset();
    eraseQuestions();
    displayCorrectAnswer();
    $('#display-time').hide();
    secondtimer.startTime();
    timer.checkCycles();
  } else {
    timer.stop;
    timer.reset();
    eraseQuestions();
    displayWrongAnswer();
    $('#display-time').hide();
    secondtimer.startTime();
    timer.checkCycles();
  }
});
$('#choice4').on('click', function(){
  if (quiz[i].answer[1] === $('#column2Fake4').data("name")){
    timer.stop;
    timer.reset();
    eraseQuestions();
    displayCorrectAnswer();
    $('#display-time').hide();
    secondtimer.startTime();
    timer.checkCycles();
  } else {
    timer.stop;
    timer.reset();
    eraseQuestions();
    displayWrongAnswer();
    $('#display-time').hide();
    secondtimer.startTime();
    timer.checkCycles();
  }
});

//DISPLAYS REMAINING TIME
function displayTimer (){
  var row = $('<div>');
  row.attr('id', 'timer');
  row.attr('class', 'row');

  var column1 = $('<div>');
  row.attr('id', 'line1');
  row.attr('class', 'col-lg-4');

  var column2 = $('<div>');
  row.attr('id', 'line2');
  row.attr('class', 'col-lg-4');
  column2.html('<p>Time Remaining: <span id="display-time"></span> </p>');

  var column3 = $('<div>');
  row.attr('id', 'line3');
  row.attr('class', 'col-lg-4');

  $('#clock').append(column2);
  $('#timer').append(column1);
  $('#line1').append(column2);
  $('#line2').append(column3);
}

// MAIN TIMER
var timer = {
  time: 20,
  startTime: function(){
  counter = setInterval(timer.decrement, 1000);
  },
  decrement: function(){
    timer.time--;
    $('#display-time').html(timer.time );
      if (timer.time === 0){
        timer.stop;
        timer.reset();
        eraseQuestions();
        outOfTime();
        $('#display-time').hide();
        secondtimer.startTime();
        timer.checkCycles();
      }
  },
  reset: function(){
    timer.time = 23;
  },
  stop: function (){
    clearInterval(counter);
  },
  checkCycles: function (){
      if( i === 8 ){
        timer.stop();
        showResults();
      }
  }
}

//Second timer
var secondtimer = {
  time: 3,
  startTime: function(){
  shortCounter = setInterval(secondtimer.decrement, 1000);
  },
  decrement: function(){
    secondtimer.time--;

      if (secondtimer.time === 0){
        secondtimer.stop();
        secondtimer.reset();
        eraseOutOfTime();
        eraseCorrectAnswer();
        eraseWrongAnswer();
        nextBatch();
        $('#display-time').show();
      }
      if (j === 8){
        secondtimer.stop;
      }
  },
  reset: function(){
    secondtimer.time = 3;
  },
  stop: function (){
    clearInterval(shortCounter);
  },
}

//ACCESS TO RESTART
$('#restart').on('click', function(){
  i = 0; //check the number of times the timer rests.
  j = 0;
  counter;
  shortCounter;
  correct = 0;
  incorrect = 0;
  noAnswer = 0;
  $('#restart').hide();
  timer.startTime();
  displayTimer();
  displayQuestion(i);//pass the question i when looping
  displayFake1(i);
  displayFake2(i);
  displayFake3(i);
  displayFake4(i);
  console.log('hello');
});
//DISPLAYS OUT OF TIME SCREEN
function outOfTime(){
  noAnswer++;
  var row = $('<div>');
  row.attr('id', 'no-time');
  row.attr('class', 'col-lg-12');
  var column1 = $('<div>');
  column1.html('<h2>OUT OF TIME</h2>');
  column1.attr('id', 'out')
  var column2 = $('<div>');
  column2.html('<h2>The correct answer was  '+ quiz[i].answer[0] + '</h2>');
  column2.attr('id', 'out2');
  var column3 = $('<img>');
  column3.attr('src', quiz[i].image); //SHOW ANSWER HERE
  $('#wrapper').append(row);
  $('#no-time').append(column1);
  $('#out').append(column2);
  $('#out2').append(column3);
}

//DISPLAY CORRECT ANSWER
function displayCorrectAnswer (){
  correct++;
  var row = $('<div>');
  row.attr('id', 'right');
  row.attr('class', 'col-lg-12');
  var column1 = $('<div>');
  column1.html('<h2>CORRECT!</h2>');
  column1.attr('id', 'thatsright');
  var column2 = $('<img>');
  column2.attr('src', quiz[i].image);
  column2.attr('id', 'thatsright2');

  $('#wrapper').append(row);
  $('#right').append(column1);
  $('#thatsright').append(column2);
}
//TO ERASE CORRECT ANSWER
function eraseCorrectAnswer(){
  $('#right').remove();
}

//DISPLAYS WRONG ANSWER
function displayWrongAnswer (){
  incorrect++;
  var row = $('<div>');
  row.attr('id', 'wrong');
  row.attr('class', 'col-lg-12');
  var column1 = $('<div>');
  column1.html('<h2>NOPE!</h2>');
  column1.attr('id', 'nope')
  var column2 = $('<div>');
  column2.attr('id', 'no');
  column2.html('<h2>The correct answer was  '+ quiz[i].answer[0] + '</h2>');
  var column3 = $('<img>');
  column3.attr('src', quiz[i].image);
   //SHOW ANSWER HERE
  $('#wrapper').append(row);
  $('#wrong').append(column1);
  $('#nope').append(column2);
  $('#no').append(column3);

}
//TO ERASE CORRECT ANSWER
function eraseWrongAnswer(){
  $('#wrong').remove();
}

//TO ERASE PREVIOUS BATCH
function eraseQuestions(){
  $('#question').remove();
  $('#fake1').remove();
  $('#fake2').remove();
  $('#fake3').remove();
  $('#fake4').remove();
}
//TO ERASE OUT-OF-TIME MESSAGE
function eraseOutOfTime(){
  $('#no-time').remove();
}

//SHOWS NEXT SET OF QUESTIONS
function nextBatch(){
  j++; i++;
  timer.startTime;
  displayQuestion(i);//pass the question i when looping
  displayFake1(i);
  displayFake2(i);
  displayFake3(i);
  displayFake4(i);
}
//SHOWS RESULT SCREEN
function results(){
  var row = $('<div>');
  row.attr('id', 'results');
  row.attr('class', 'col-lg-12');

  var column1 = $('<div>');
  column1.html('<h2>All done, heres how you did!</h2>');
  column1.attr('id', 'done');

  var column2 = $('<div>');
  column2.html('<h2>Correct Answers: '+ correct + '</h2>');
  column2.attr('id', 'done2');

  var column3 = $('<div>');
  column3.html('<h2>Incorrect Answers: '+ incorrect + '</h2>');
  column3.attr('id', 'done3');

  var column4 = $('<div>');
  column4.html('<h2>Unanswered: '+ noAnswer + '</h2>');
  column4.attr('id', 'done4');

  var restart = $('<button>');
  restart.text('Restart');
  restart.attr('id', 'restart');
  restart.attr('class', 'btn btn-default btn-lg btn-block"');

  $('#wrapper').append(row);
  $('#results').append(column1);
  $('#done').append(column2);
  $('#done2').append(column3);
  $('#done3').append(column4);
  $('#done4').append(restart);
}
function showResults(){
  var resultado = setTimeout(results, 3000);
}
