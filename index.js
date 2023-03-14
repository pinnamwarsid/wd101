// Load saved data from web storage
window.addEventListener('load', () => {
  const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
  registrations.forEach(registration => {
    addRegistrationToTable(registration);
  });
});

// Add new registration to table and web storage
document.getElementById('registration-form').addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const dob = document.getElementById('dob').value.trim();
  const terms = document.getElementById('terms').checked;

  if (!isValidDateOfBirth(dob)) {
    alert('Date of birth must be between 18 and 55 years ago');
    return;
  }

  const registration = { name, email, password, dob, terms };
  addRegistrationToTable(registration);
  saveRegistration(registration);
  resetForm();
});

// Add registration to table
function addRegistrationToTable(registration) {
  const table = document.getElementById('registration-table').getElementsByTagName('tbody')[0];
  const row = table.insertRow();
  const nameCell = row.insertCell(0);
  const emailCell = row.insertCell(1);
  const passwordCell = row.insertCell(2);
  const dobCell = row.insertCell(3);
  const termsCell = row.insertCell(4);
  nameCell.textContent = registration.name;
  emailCell.textContent = registration.email;
  passwordCell.textContent = registration.password;
  dobCell.textContent = registration.dob;
  termsCell.textContent = registration.terms ? 'Yes' : 'No';
}

// Save registration to web storage
function saveRegistration(registration) {
  const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
  registrations.push(registration);
  localStorage.setItem('registrations', JSON.stringify(registrations));
}

// Reset form after submission
function resetForm() {
  document.getElementById('registration-form').reset();
}

// Validate date of birth
function isValidDateOfBirth(dob) {
  const today = new Date();
  const birthDate = new Date(dob);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age >= 18 && age <= 55;
}


