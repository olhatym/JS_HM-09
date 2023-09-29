import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('[data-start]');
const inputeDate = document.querySelector('#datetime-picker');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');
let timerInterval

flatpickr("#datetime-picker", { enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },});

startBtn.addEventListener("click", onStart);

function onStart() {
    timerInterval = setInterval(()=>{
        const dateNow = Date.now();
        const selectedDate = inputeDate._flatpickr.selectedDates[0].getTime();
        const diff = selectedDate - dateNow;
        console.log(diff)
        milisecondsToDHMS (diff)  
    },1000);
}

function milisecondsToDHMS(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  daysField.textContent = days;
  hoursField.textContent = remainingHours;
  minutesField.textContent = remainingMinutes;
  secondsField.textContent = remainingSeconds;
}

