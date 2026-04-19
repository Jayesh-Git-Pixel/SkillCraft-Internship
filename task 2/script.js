let timer;
let milliseconds = 0;
let running = false;

function updateDisplay() {
  let ms = milliseconds % 100;
  let totalSeconds = Math.floor(milliseconds / 100);

  let secs = totalSeconds % 60;
  let mins = Math.floor((totalSeconds % 3600) / 60);
  let hrs = Math.floor(totalSeconds / 3600);

  document.getElementById("display").innerText =
    `${pad(hrs)}:${pad(mins)}:${pad(secs)}:${pad(ms)}`;
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      milliseconds++;
      updateDisplay();
    }, 10); // updates every 10ms
  }
}

function pause() {
  running = false;
  clearInterval(timer);
}

function reset() {
  running = false;
  clearInterval(timer);
  milliseconds = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (running) {
    let lapTime = document.getElementById("display").innerText;
    let li = document.createElement("li");
    li.innerText = lapTime;
    document.getElementById("laps").appendChild(li);
  }
}