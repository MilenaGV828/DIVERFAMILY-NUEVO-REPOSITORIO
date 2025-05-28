
// Cronómetro con alarma divertida para niños
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let setBtn = document.getElementById("setTime");
let inputMinutes = document.getElementById("inputMinutes");
let display = document.getElementById("display");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
let targetSeconds = null;

let alarmSound = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_7fdc84dfd4.mp3");
let buttonSound = new Audio("https://cdn.pixabay.com/audio/2022/10/31/audio_ebd86ae8db.mp3");

function updateDisplay() {
    let sec = seconds < 10 ? "0" + seconds : seconds;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let hr = hours < 10 ? "0" + hours : hours;
    display.textContent = `${hr}:${min}:${sec}`;
    display.style.color = seconds % 2 === 0 ? '#ff595e' : '#4f772d';
}

function startTimer() {
    if (!interval) {
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();

            let totalNow = hours * 3600 + minutes * 60 + seconds;
            if (targetSeconds !== null && totalNow === targetSeconds) {
                alarmSound.play();
                alert("¡Tiempo cumplido! ⏰");
                stopTimer();
            }
        }, 1000);
    }
    buttonSound.play();
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
    buttonSound.play();
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    targetSeconds = null;
    updateDisplay();
    buttonSound.play();
}

function setTimer() {
    let min = parseInt(inputMinutes.value);
    if (!isNaN(min) && min > 0) {
        targetSeconds = min * 60;
        alert(`Alarma programada para ${min} minuto(s).`);
    } else {
        alert("Por favor, ingresa un número válido de minutos.");
    }
    buttonSound.play();
}

[startBtn, stopBtn, resetBtn, setBtn].forEach(btn => {
    btn.addEventListener("click", () => {
        buttonSound.play();
    });
});

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
setBtn.addEventListener("click", setTimer);
