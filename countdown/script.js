import countdown from "./countdown.js";
const getDayDiv = document.querySelector(".day");
const getHourDiv = document.querySelector(".hour");
const getMinuteDiv = document.querySelector(".minute");
const getSecondDiv = document.querySelector(".second");

const tempoParaNatal = new countdown("24 December 2021 23:59:59 GMT-0300");

function displayDay() {
  getDayDiv.innerHTML = `<span>${tempoParaNatal.total.days}</span> <p class='desc'>Days</p>`;
}

function displayHour() {
  getHourDiv.innerHTML = `<span>${tempoParaNatal.total.hours}</span> <p class='desc'>Hours</p>`;
}
function displayMinutes() {
  getMinuteDiv.innerHTML = `<span>${tempoParaNatal.total.minutes}</span><p class='desc'>Minutes</p>`;
}
function displaySeconds() {
  getSecondDiv.innerHTML = `<span>${tempoParaNatal.total.seconds}</span><p class='desc'>Seconds</p>`;
}

setInterval(() => {
  displayDay();
  displayHour();
  displayMinutes();
  displaySeconds();
}, 1000);
