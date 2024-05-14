let startTime = 0;
let elapsedTime = 0;
let intervalId = null;

const display = document.querySelector('.display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(updateTime, 10);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopTimer() {
  clearInterval(intervalId);
  elapsedTime = Date.now() - startTime;
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetTimer() {
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  display.textContent = '00:00:00:00';
  startButton.disabled = false;
  stopButton.disabled = true;
}

function updateTime() {
  const now = Date.now();
  elapsedTime = now - startTime;

  let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor(elapsedTime / 10) % 100;

  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  milliseconds = milliseconds.toString().padStart(2, '0');

  display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
