import Notiflix from 'notiflix';

const firstDelayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('button');
let promiseInterval;

submitBtn.addEventListener('click', onStart);

function onStart (event) {
  event.preventDefault();
  const firstDelay = Number(firstDelayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  
    for (let i = 1; i <= amount; i++) {
      const delay = firstDelay + step * (i - 1);
      createPromise(i, delay)
      .then(message => success(message))
      .catch(message => fail(message))
    }
  
  
  
}

// function createPromise(position, delay) {
//   return new Promise((resolve, reject)=>{
//     promiseInterval = setTimeout(()=>{
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//        resolve (`%c ✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         reject (`%c ❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     }, delay)
//   })
  
// }


function createPromise(position, delay) {
  return new Promise((resolve, reject)=>{
    promiseInterval = setTimeout(()=>{
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
       resolve (`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject (`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay)
  })
  
}

function success (message) {
  Notiflix.Notify.success(message);
};

function fail (message) {
  Notiflix.Notify.failure(message);
}
