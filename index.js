
// Get the form and input elements
const form = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const dobInput = document.querySelector('#dob');
const termsInput = document.querySelector('#terms');

// Listen for the form submit event
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form submission

  // Get the input values
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const dob = dobInput.value;
  const terms = termsInput.checked;

  // Store the input values in an object
  const userDetails = {
    name,
    email,
    password,
    dob,
    terms
  };

  // Do something with the userDetails object
  console.log(userDetails);
});
