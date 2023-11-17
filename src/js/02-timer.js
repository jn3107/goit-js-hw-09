import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
console.log(startBtn);

const options = {
  enableTime: true,
  time_24hr: true,
    defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      
      if (selectedDate <= Date.now()) {
          Notiflix.Notify.failure('Please choose a date in future');
      } else {
          Notiflix.Notify.success('You can start the timer now!');
          startBtn.removeAttribute('disabled');
      }
  },
};

const inputEl = document.querySelector('#datetime-picker');
console.log(inputEl);

flatpickr(inputEl, options);

startBtn.addEventListener('click', startTimer);

function startTimer() {
    const selectedDate = new Date(inputEl.value);

    startBtn.setAttribute('disabled', 'disabled');

    const timerInterval = setInterval(() => {
        const timeDifference = selectedDate - Date.now();
        console.log('timeDifference', timeDifference);
        if (timeDifference <= 0) {
            clearInterval(timerInterval);
            updateTimer(0);
            Notiflix.Notify.success('Countdown finished!');
        } else {
            updateTimer(timeDifference);
        }
    }, 1000);
}

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

function updateTimer(ms) {
    const { days, hours, minutes, seconds } = convertMs(ms);
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes); 
    secondsEl.textContent = addLeadingZero(seconds);
};

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = Math.floor(ms / day);
  
  const hours = Math.floor((ms % day) / hour);
  
  const minutes = Math.floor(((ms % day) % hour) / minute);
  
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}