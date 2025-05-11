let horas = 0;
let minutos = 0;
let segundos = 0;
let running = false;
let timer;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function actualizarDisplay() {
  const h = horas.toString().padStart(2, '0');
  const m = minutos.toString().padStart(2, '0');
  const s = segundos.toString().padStart(2, '0');
  display.textContent = `${h}:${m}:${s}`;
}

function contar() {
  segundos++;
  if (segundos >= 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos >= 60) {
    minutos = 0;
    horas++;
  }
  actualizarDisplay();
}

startBtn.addEventListener('click', () => {
  if (!running) {
    running = true;
    timer = setInterval(contar, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  if (running) {
    clearInterval(timer);
    running = false;
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  running = false;
  horas = 0;
  minutos = 0;
  segundos = 0;
  actualizarDisplay();
});