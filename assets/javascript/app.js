window.onload = function(){
    $('#display-time').html(timer.time );
};

var counter;

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
