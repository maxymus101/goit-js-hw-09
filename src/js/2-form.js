let formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const formData = JSON.parse(savedData);
  Object.entries(formData).forEach(([name, value]) => {
    form.elements[name].value = value;
  });
}

form.addEventListener('input', event => {
  if (event.target.name) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
