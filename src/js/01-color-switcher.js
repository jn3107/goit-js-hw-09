function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const startColorBtn = document.querySelector('[data-start]');
const stopColorBtn = document.querySelector('[data-stop]');

console.log(startColorBtn);
console.log(stopColorBtn);

let interval;

function startRandomColor() {
    startColorBtn.disabled = true;
    interval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

function stopRandomColor() {
    startColorBtn.disabled = false;
    clearInterval(interval);
};

startColorBtn.addEventListener('click', startRandomColor);
stopColorBtn.addEventListener('click', stopRandomColor);


