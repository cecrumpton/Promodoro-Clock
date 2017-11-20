var startTimer1 = 1;
var startTimer2 = 3;
var enableTimer1 = 10; //used 10 instead of 20
var enableTimer2 = 30; //used 30 instead of 40
var timer;

var progressWork = 1500;
var progressWorkMinutes = Math.floor(progressWork / 60);
var progressWorkSeconds = Math.floor(progressWork % 60);
if (progressWorkSeconds.toString().length == 1) {
  progressWorkSeconds = "0" + progressWorkSeconds;
}

var progressWorkStorage = progressWork;
var progressWorkMinutesStorage = Math.floor(progressWorkStorage / 60);
var progressWorkSecondsStorage = Math.floor(progressWorkStorage % 60);  //technically no need for math.floor here, but whatever, it works :D
if (progressWorkSecondsStorage.toString().length == 1) {
  progressWorkSecondsStorage = "0" + progressWorkSecondsStorage;
}

var progressBreak = 300;
var progressBreakMinutes = Math.floor(progressBreak / 60);
var progressBreakSeconds = Math.floor(progressBreak % 60);
if (progressBreakSeconds.toString().length == 1) {
  progressBreakSeconds = "0" + progressBreakSeconds;
}

var progressBreakStorage = progressBreak;
var progressBreakMinutesStorage = Math.floor(progressBreakStorage / 60);
var progressBreakSecondsStorage = Math.floor(progressBreakStorage % 60);
if (progressBreakSecondsStorage.toString().length == 1) {
  progressBreakSecondsStorage = "0" + progressBreakSecondsStorage;
}

document.getElementById("workClock").innerHTML = progressWorkMinutes + ":" + progressWorkSeconds;
document.getElementById("breakClock").innerHTML = progressBreakMinutes + ":" + progressBreakSeconds;
document.getElementById("workClockSetTime").innerHTML = progressWorkMinutesStorage + ":" + progressWorkSecondsStorage;
document.getElementById("breakClockSetTime").innerHTML = progressBreakMinutesStorage + ":" + progressBreakSecondsStorage;

function addWorkClock() {
  if (startTimer1 == 1) {
  if (progressWorkStorage < 3540) {
  progressWorkStorage += 60;

  progressWorkMinutesStorage = Math.floor(progressWorkStorage / 60);
  progressWorkSecondsStorage = Math.floor(progressWorkStorage % 60);
  if (progressWorkSecondsStorage.toString().length == 1) {
    progressWorkSecondsStorage = "0" + progressWorkSecondsStorage;
  }
  document.getElementById("workClockSetTime").innerHTML = progressWorkMinutesStorage + ":" + progressWorkSecondsStorage;


  progressWork = progressWorkStorage;

  progressWorkMinutes = Math.floor(progressWork / 60);
  progressWorkSeconds = Math.floor(progressWork % 60);
  if (progressWorkSeconds.toString().length == 1) {
    progressWorkSeconds = "0" + progressWorkSeconds;
  }
  document.getElementById("workClock").innerHTML = progressWorkMinutes + ":" + progressWorkSeconds;
  }
  }
}

function subtWorkClock() {
  if (startTimer1 == 1) {
  if (progressWorkStorage > 60) {
  progressWorkStorage -= 60;

  progressWorkMinutesStorage = Math.floor(progressWorkStorage / 60);
  progressWorkSecondsStorage = Math.floor(progressWorkStorage % 60);
  if (progressWorkSecondsStorage.toString().length == 1) {
    progressWorkSecondsStorage = "0" + progressWorkSecondsStorage;
  }
  document.getElementById("workClockSetTime").innerHTML = progressWorkMinutesStorage + ":" + progressWorkSecondsStorage;


  progressWork = progressWorkStorage;

  progressWorkMinutes = Math.floor(progressWork / 60);
  progressWorkSeconds = Math.floor(progressWork % 60);
  if (progressWorkSeconds.toString().length == 1) {
    progressWorkSeconds = "0" + progressWorkSeconds;
  }
  document.getElementById("workClock").innerHTML = progressWorkMinutes + ":" + progressWorkSeconds;
  }
  }
}

function addBreakClock() {
  if (startTimer2 == 3) {
  if (progressBreakStorage < 3540) {
  progressBreakStorage += 60;

  progressBreakMinutesStorage = Math.floor(progressBreakStorage / 60);
  progressBreakSecondsStorage = Math.floor(progressBreakStorage % 60);
  if (progressBreakSecondsStorage.toString().length == 1) {
    progressBreakSecondsStorage = "0" + progressBreakSecondsStorage;
  }
  document.getElementById("breakClockSetTime").innerHTML = progressBreakMinutesStorage + ":" + progressBreakSecondsStorage;


  progressBreak = progressBreakStorage;

  progressBreakMinutes = Math.floor(progressBreak / 60);
  progressBreakSeconds = Math.floor(progressBreak % 60);
  if (progressBreakSeconds.toString().length == 1) {
    progressBreakSeconds = "0" + progressBreakSeconds;
  }
  document.getElementById("breakClock").innerHTML = progressBreakMinutes + ":" + progressBreakSeconds;

  }
  }
}

function subtBreakClock() {
  if (startTimer2 == 3) {
  if (progressBreakStorage > 60) {
  progressBreakStorage -= 60;

  progressBreakMinutesStorage = Math.floor(progressBreakStorage / 60);
  progressBreakSecondsStorage = Math.floor(progressBreakStorage % 60);
  if (progressBreakSecondsStorage.toString().length == 1) {
    progressBreakSecondsStorage = "0" + progressBreakSecondsStorage;
  }
  document.getElementById("breakClockSetTime").innerHTML = progressBreakMinutesStorage + ":" + progressBreakSecondsStorage;


  progressBreak = progressBreakStorage;

  progressBreakMinutes = Math.floor(progressBreak / 60);
  progressBreakSeconds = Math.floor(progressBreak % 60);
  if (progressBreakSeconds.toString().length == 1) {
    progressBreakSeconds = "0" + progressBreakSeconds;
  }
  document.getElementById("breakClock").innerHTML = progressBreakMinutes + ":" + progressBreakSeconds;

  }
  }
}

function startDaClock() {
  if (enableTimer1 == 10 && enableTimer2 == 30) {
    enableTimer1 = 20;
    startTimer1 = 2;
    startWC();
} else if (enableTimer1 == 20 && enableTimer2 ==30) { //first clock
  if (startTimer1 == 1) {
    startTimer1 = 2;
    startWC();
  } else if (startTimer1 == 2) {
    startTimer1 = 1;
    startWC();
  }
} else if (enableTimer1 == 10 && enableTimer2 ==40) { //second clock
  if (startTimer2 == 3) {
    startTimer2 = 4;
    startBC();
  } else if (startTimer2 == 4) {
    startTimer2 = 3;
    startBC();
  }
}
}//end startDaClock

function startWC() {
  if (enableTimer1 == 20) {

  console.log(startTimer1);

  if (startTimer1 == 2) {
  progressWorkMinutes = Math.floor(progressWork / 60);
  progressWorkSeconds = Math.floor(progressWork % 60);
  if (progressWorkSeconds.toString().length == 1) {
    progressWorkSeconds = "0" + progressWorkSeconds;
  }
  document.getElementById("workClock").innerHTML = progressWorkMinutes + ":" + progressWorkSeconds; //displays correct time at the beginning of the interval 2nd time and onwards
  timer = setInterval(countdown, 1000);
  function countdown() {
    if (progressWork == 0) {
      clearInterval(timer);
      enableTimer1 = 10;
      enableTimer2 = 40;
      startTimer1 = 1;
      startTimer2 = 4;
      progressWork = progressWorkStorage;
      startBC();
    } else {
      progressWork--;
      progressWorkMinutes = Math.floor(progressWork / 60);
      progressWorkSeconds = Math.floor(progressWork % 60);
      if (progressWorkSeconds.toString().length == 1) {
        progressWorkSeconds = "0" + progressWorkSeconds;
      }
      document.getElementById("workClock").innerHTML = progressWorkMinutes + ":" + progressWorkSeconds;
    }
  }
  } else if (startTimer1 == 1) {
    clearInterval(timer);
  } //end if start == t/f
  } //end if enableTimer1
} //end startWC

function startBC() {
  if (enableTimer2 == 40) {

  console.log(startTimer2);

  if (startTimer2 == 4) {
  progressBreakMinutes = Math.floor(progressBreak / 60);
  progressBreakSeconds = Math.floor(progressBreak % 60);
  if (progressBreakSeconds.toString().length == 1) {
    progressBreakSeconds = "0" + progressBreakSeconds;
  }
  document.getElementById("breakClock").innerHTML = progressBreakMinutes + ":" + progressBreakSeconds; //displays correct time at the beginning of the interval 2nd time and onwards
  timer = setInterval(countdown, 1000);
  function countdown() {
    if (progressBreak == 0) {
      clearInterval(timer);
      enableTimer1 = 20;
      enableTimer2 = 30;
      startTimer1 = 2;
      startTimer2 = 3;
      progressBreak = progressBreakStorage;
      startWC();
    } else {
      progressBreak--;
      progressBreakMinutes = Math.floor(progressBreak / 60);
      progressBreakSeconds = Math.floor(progressBreak % 60);
      if (progressBreakSeconds.toString().length == 1) {
        progressBreakSeconds = "0" + progressBreakSeconds;
      }
      document.getElementById("breakClock").innerHTML = progressBreakMinutes + ":" + progressBreakSeconds;
    }
  }
  } else if (startTimer2 == 3) {
    clearInterval(timer);
  } //end if start == t/f
  } //end if enableTimer2
} //end startBC
