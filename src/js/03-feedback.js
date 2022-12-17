const KEY_LOCAL_STORAGE = 'feedback-form-state';

const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

const setDataToLokalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

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

email.addEventListener('input', handle);
message.addEventListener('input', handle);
form.addEventListener('submit', event => {
  event.preventDefault();
  form.submit();
  form.reset();
  resetDataForm();
});

const data = JSON.parse(getDateFromLocalStorage(KEY_LOCAL_STORAGE));
setDataToFildForm(data);
