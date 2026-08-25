const formData = {
  email: '',
  message: '',
};

const FILED_NAME = 'feedback-form-state';

const formElem = document.querySelector('.feedback-form');

formElem.addEventListener('input', handleInput);
formElem.addEventListener('submit', handleSubmit);

function handleInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FILED_NAME, JSON.stringify(formData));
}

function handleSubmit(e) {
  e.preventDefault();

  if (
    !e.target.elements.email.value.trim() ||
    !e.target.elements.message.value.trim()
  ) {
    alert('Data is empty');
    return;
  }
  e.target.reset();
  localStorage.removeItem(FILED_NAME);
  formData.email = '';
  formData.message = '';
}

const localData = localStorage.getItem(FILED_NAME);

if (localData) {
  try {
    for (const [key, value] of Object.entries(JSON.parse(localData))) {
      formElem.elements[key].value = value;
    }
  } catch (e) {
    alert(e);
    localStorage.removeItem(FILED_NAME);
  }
}
