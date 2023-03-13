const form = document.querySelector('#registration-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const dobInput = document.querySelector('#dob');
const acceptedTermsInput = document.querySelector('#accepted-terms');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //Validate email address
  if (!isValidEmail(emailInput.value)) {
    showErrorMessage(emailInput, 'Invalid email address');
    return;
  }

  // Validate age
  const age = calculateAge(new Date(dobInput.value));
  if (age < 18 || age > 55) {
    showErrorMessage(dobInput, 'Age must be between 18 and 55');
    return;
  }

  // Clear any existing error messages
  clearErrorMessages();

  // Create new registration entry
  const registration = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    dob: dobInput.value,
    acceptedTerms: acceptedTermsInput.checked
  };

  // Save registration to local storage
  saveRegistration(registration);

  // Reset form
  form.reset();

  // Show success message
  alert('Registration successful!');
});
