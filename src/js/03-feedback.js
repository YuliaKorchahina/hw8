const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

const handler = event => {
  event.preventDefault();
  localStorage.setItem('inputEl', 'messageEl.value');
};
inputEl.addEventListener('click', handler);
console.log(messageEl.value);
