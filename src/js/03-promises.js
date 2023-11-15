import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(event.target.delay.value);
  const step = Number(event.target.step.value);
  const amount = Number(event.target.amount.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay + step * (i - 1))
      .then(({ position, delay }) => {
        iziToast.success({
          title: 'Fulfilled promise',
          message: `Promise ${position} in ${delay}ms`
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          title: 'Rejected promise',
          message: `Promise ${position} in ${delay}ms`
        });
      });
  }
});
