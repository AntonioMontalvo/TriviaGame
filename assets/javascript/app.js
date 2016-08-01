// window.onload = function(){
//
// };

var counter;
//Addresses Time Remaining.
var timer = {
  time: 30,
  startTime: function(){
  counter = setInterval(timer.decrement, 1000);
  },
  decrement: function(){
    timer.time--;
    $('#display-time').html(timer.time );
      if (timer.time === 0){
        timer.reset();
      }
  },
  reset: function(){
    timer.time = 30;
  },
  stop: function (){
    clearInterval(counter);
  }
}

timer.startTime();

//Set of questions and answers.
var quiz = [
    {
     question:'Is Earth the only planet in the solar system where water can exist as liquid, and gas?',
     answer: 'Earth is the only planet in the solar system where water can exist as liquid, and gas.',
     fake1:['Water exists as liquid, and gas on Neptune', false],
     fake2:['Earth is the only planet in the solar system where water can exist as liquid, and gas.', true],
     fake3:['Nope', false],
     fake4:['There are 3 planets in the solar system where water can exist as liquid, and gas.', false]
 	},
    {
     question:'What is the shape of the Earth?',
     answer: 'The Earth is slightly pear-shaped.',
     fake1:['Earth is a perfect sphere.', false],
     fake2:['Earth is a shaped like an oval.', false],
     fake3:['Earth is shaped like a banana', false],
     fake4:['The Earth is slightly pear-shaped.', true]
 	},
 	{
     question:"What is Jupiter's rotation period?",
     answer: 'Jupiter Astrofact:  Rotation period: 10 hours.',
     fake1:['Jupiter Astrofact:  Rotation period: 21 hours.', false],
     fake2:['Jupiter Astrofact:  Rotation period: 11 hours.', false],
     fake3:['Jupiter Astrofact:  Rotation period: 10 hours.', true],
     fake4:['Jupiter Astrofact:  Rotation period: 27 hours.', false]
 	},
 	{
     question:'How many moons does mars have?',
     answer: 'Mars has 2 small moons: Phobos and Deimos whose names mean "fear" and "panic".',
     fake1:['Mars Astrofact: Mars has 3 small moons.', false],
     fake2:['Mars Astrofact: Mars has no moons', false],
     fake3:['Mars Astrofact: Mars has 1 small moon.', false],
     fake4:['Mars has 2 small moons: Phobos and Deimos whose names mean "fear" and "panic".', true]
 	},
 	{
     question:"What is Mercury's orbital period?",
     answer: 'Mercury orbits The Sun faster than any other planet: One year lasts just 88 Earth days.',
     fake1:['Mercury orbits The Sun faster than any other planet: One year lasts just 88 Earth days.', true],
     fake2:['It take 240 days to orbit the Sun.', false],
     fake3:['One year in Mercury lasts 390 Earth days.', false],
     fake4:['Mercury orbits The Sun in 100 days.', false]
 	},
 	{
     question:'How are days compared to years on Mercury?',
     answer: 'Days are longer than years on the planet Mercury.',
     fake1:['Years are longer than days.', false],
     fake2:['They are the same', false],
     fake3:['Days are longer than years on the planet Mercury.', true],
     fake4:['Every two years days are shorter than years.', false]
 	},
 	{
     question:'How many moons does Mercury have?.',
     answer: 'Mercury Astrofact: Moons: 0.',
     fake1:['Mercury has 3 small moons.', false],
     fake2:['Mercury Astrofact: Moons: 0.', true],
     fake3:['Mercury has 13 small moons.', false],
     fake4:['Mercury has 2 moons.', false]
 	},
  {
     question:'How many moons does Neptune have?',
     answer: 'Neptune Astrofact: Moons: 13.',
     fake1:['Neptune Astrofact: Moons: 13.', true],
     fake2:['Neptune Astrofact: Moons: 43.', false],
     fake3:['Neptune Astrofact: Moons: 3.', false],
     fake4:['Neptune Astrofact: Moons: 33.', false]
     },
     {
     question:'How many moons does Saturn have?',
     answer: 'Saturn Astrofact: Moons: 62.  Of those 53 are named.',
     fake1:['Saturn Astrofact: Moons: 6.',false],
     fake2:['Saturn Astrofact: Moons: 42.',false],
     fake3:['Saturn Astrofact: Moons: 162.', false],
     fake4:['Saturn Astrofact: Moons: 62.  Of those 53 are named.', true]
  },
];

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
  column2.html('<h3>' + quiz[i].question+ '</h3>');

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
  column2.attr('title', quiz[i].fake1[1]);
  column2.html('<h3>' + quiz[i].fake1[0]+ '</h3>');
  var column3 = $('<div>')
  column3.attr('id', 'column3Fake1');
  column3.attr('class', 'col-lg-4');
$('#choice1').append(row);
$('#fake1').append(column1);
$('#column1Fake1').append(column2);
$('#column32Fake1').append(column3);
console.log($('#column2Fake1').attr("title"));//this is the value of true or false
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
  column2.attr('title', quiz[i].fake2[1]);
  column2.html('<h3>' + quiz[i].fake2[0]+ '</h3>');
  var column3 = $('<div>')
  column3.attr('id', 'column3Fake2');
  column3.attr('class', 'col-lg-4');
$('#choice2').append(row);
$('#fake2').append(column1);
$('#column1Fake2').append(column2);
$('#column32Fake1').append(column3);
console.log($('#column2Fake2').attr("title"));//this is the value of true or false
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
  column2.attr('title', quiz[i].fake3[1]);
  column2.html('<h3>' + quiz[i].fake3[0]+ '</h3>');
  var column3 = $('<div>')
  column3.attr('id', 'column3Fake3');
  column3.attr('class', 'col-lg-4');
$('#choice3').append(row);
$('#fake3').append(column1);
$('#column1Fake3').append(column2);
$('#column32Fake3').append(column3);
console.log($('#column2Fake3').attr("title"));//this is the value of true or false
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
  column2.attr('title', quiz[i].fake4[1]);
  column2.html('<h3>' + quiz[i].fake4[0]+ '</h3>');
  var column3 = $('<div>')
  column3.attr('id', 'column3Fake4');
  column3.attr('class', 'col-lg-4');
$('#choice4').append(row);
$('#fake4').append(column1);
$('#column1Fake4').append(column2);
$('#column32Fake4').append(column3);
console.log($('#column2Fake4').attr("title"));//this is the value of true or false
}

i = 4;
displayQuestion(i);//pass the question i when looping
displayFake1(i);
displayFake2(i);
displayFake3(i);
displayFake4(i);
