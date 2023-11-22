
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

function twoDigit(digit) {
  return digit < 10 ? '0' + digit : digit.toString();
}

startBtn.addEventListener("click", () => {
  interval = setInterval(() => {
    if (!isPaused) {
      milliseconds += 1;

      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      minutesEl.textContent = twoDigit(minutes);
      secondsEl.textContent = twoDigit(seconds);
      millisecondsEl.textContent = twoDigit(milliseconds);
    }
  }, 1);
});

pauseBtn.addEventListener("click", () => {
  isPaused = true;
});

resumeBtn.addEventListener("click", () => {
  isPaused = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  isPaused = false;
  minutesEl.textContent = twoDigit(minutes);
  secondsEl.textContent = twoDigit(seconds);
  millisecondsEl.textContent = twoDigit(milliseconds);
});


   
