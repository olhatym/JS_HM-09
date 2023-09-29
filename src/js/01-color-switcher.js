// Завдання 1 - перемикач кольорів

// HTML містить кнопки «Start» і «Stop».
// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start», раз на 
// секунду змінює колір фону <body> на випадкове значення, 
// використовуючи інлайн стиль. Натисканням на кнопку «Stop» 
// зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну 
// кількість разів. Зроби так, щоб доки зміна теми запущена, 
// кнопка «Start» була неактивною (disabled).

// Для генерування випадкового кольору використовуй функцію 
// getRandomHexColor

// function getRandomHexColor() {
//   return #${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)};
// }

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let bgColorChange
console.dir(body);

startBtn.addEventListener("click", onClick);
stopBtn.addEventListener("click", onStop);

stopBtn.disabled = true;

function onClick() {
    stopBtn.disabled = false;
    bgColorChange = setInterval (()=>{
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function onStop() {
    clearInterval(bgColorChange);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}
