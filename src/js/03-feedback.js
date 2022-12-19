import throttle from 'lodash.throttle';

const KEY_LOCAL_STORAGE = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea');

const setDataToLokalStorage = throttle((key, value) => {
  localStorage.setItem(key, value);
}, 500);

const getDateFromLocalStorage = key => {
  return localStorage.getItem(key);
};

const handle = event => {
  const name = event.currentTarget.name;
  const value = event.currentTarget.value;

  const data = JSON.parse(getDateFromLocalStorage(KEY_LOCAL_STORAGE));

  setDataToLokalStorage(
    KEY_LOCAL_STORAGE,
    JSON.stringify({
      ...data,
      [name]: value,
    })
  );
};

const setDataToFildForm = data => {
  if (data) {
    email.value = data.email ?? '';
    message.value = data.message ?? '';
  }
};

const removeItem = key => {
  localStorage.removeItem(key);
};

const resetDataForm = () => {
  removeItem(KEY_LOCAL_STORAGE);
};

const handleSubmit = event => {
  const data = JSON.parse(getDateFromLocalStorage(KEY_LOCAL_STORAGE));
  event.preventDefault();
  event.stopPropagation();
  form.reset();
};

email.addEventListener('input', handle);
message.addEventListener('input', handle);
form.addEventListener('submit', event => {
  event.preventDefault();
  event.stopPropagation();
  handleSubmit(event);
  console.log(data);
  resetDataForm();
});

const data = JSON.parse(getDateFromLocalStorage(KEY_LOCAL_STORAGE));
setDataToFildForm(data);
