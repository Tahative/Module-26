//step-1: add event handler to the button
document.getElementById('btn-submit').addEventListener("click", function () {
//step-2: get the email address inside the email input field
//always remember to use .value to get text from an input/textarea field

  const emailField = document.getElementById('email-field');
const email = emailField.value;

const passField = document.getElementById('pass-field');

const password = passField.value;
console.log(email, password);
});
