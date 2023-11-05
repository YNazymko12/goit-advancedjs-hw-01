import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
reloadPage();

function reloadPage() {
    email.value = formData.email || '';
    message.value = formData.message || '';
};

function handleInput() {
    formData = { email: email.value, message: message.value};
    saveToLocalStorage();
};

function handleSubmit(evt) {
    evt.preventDefault();
  
    if (email.value === '' || message.value === '') {
      return alert('Please fill in all required fields.');
    }
  
    console.log({ email: email.value, message: message.value });
    clearLocalStorage();
    evt.currentTarget.reset();
    formData = {};
  }

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  };

  function clearLocalStorage() {
    localStorage.removeItem(STORAGE_KEY);
  };
