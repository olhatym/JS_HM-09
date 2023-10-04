import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('[data-start]');
const inputeDate = document.querySelector('#datetime-picker');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');

let timerInterval;

startBtn.addEventListener("click", onStart);
startBtn.disabled = true;

flatpickr("#datetime-picker", { enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= Date.now()) {
        window.alert("Please choose a date in the future");
        inputeDate._flatpickr.setDate(new Date ())
      } else {
        startBtn.disabled = false
      }
      console.log(selectedDates[0]);
    },});

function onStart() {
    timerInterval = setInterval(()=>{
        const dateNow = Date.now();
        const selectedDate = inputeDate._flatpickr.selectedDates[0].getTime();
        const diff = selectedDate - dateNow;
        startBtn.disabled = true;
        console.log(diff);
        if (diff <= 0) {
          clearInterval(timerInterval);
          startBtn.disabled = true;
          return
        }
        milisecondsToDHMS (diff);
        
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

  daysField.textContent = days.toString().padStart(2, '0');
  hoursField.textContent = remainingHours.toString().padStart(2, '0');
  minutesField.textContent = remainingMinutes.toString().padStart(2, '0');
  secondsField.textContent = remainingSeconds.toString().padStart(2, '0');
}

