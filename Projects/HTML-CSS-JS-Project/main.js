// const form = document.getElementById('registrationForm');
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');

form.addEventListener('submit', (event) => {
  // Prevent default form submission
  event.preventDefault();

  // Add your validation logic here
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;

  // Check if all required fields are filled
  if (!firstName || !lastName || !email || !contact) {
    alert('Please fill out all required fields.');
    return;
  }

  // Additional basic validation
  // - Check if email format is valid (very basic check)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // - Check if contact is a 10-digit number (basic check)
  if (contact.length !== 10 || isNaN(contact)) {
    alert('Please enter a valid 10-digit contact number.');
    return;
  }

  // If validation passes, submit the form (consider using AJAX for form submission without page reload)
  form.reset();
  alert('Registration successful!');
  // form.submit(); // Uncomment to submit the form (optional)
});
})