const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = Array.from(loginForm.elements)
    .filter(el => el.name)
    .reduce(
      (acc, el) => {
        const value = el.value.trim();
        if (!value) {
          acc.isValid = false;
        } else {
          acc.data[el.name] = value;
        }
        return acc;
      },
      { data: {}, isValid: true }
    );
  //validation
  if (!formData.isValid) {
    alert('All form fields must be filled in');
    return;
  }
  console.log(formData.data);
  loginForm.reset();
});
