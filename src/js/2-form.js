const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  saveToLS(STORAGE_KEY, formData);
});

function initPage() {
  const { email = '', message = '' } = loadFromLS(STORAGE_KEY);

  form.elements.email.value = email;
  form.elements.message.value = message;

  formData.email = email;
  formData.message = message;
}

initPage();

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    return alert('Fill please all fields');
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
});

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch {
    return {};
  }
}

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';

document.head.appendChild(link);
