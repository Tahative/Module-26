//step-1: add event handler to the button
document.getElementById("btn-submit").addEventListener("click", function () {
  //step-2: get the email address inside the email input field
  //always remember to use .value to get text from an input/textarea field

  const emailField = document.getElementById("email-field");
  const email = emailField.value;

  const passField = document.getElementById("pass-field");
  const password = passField.value;



//Danger: Do not verify email password on the client side
//step-4: verify email and password
if (email === "sontan@baap.com" && password === "secret") {
  console.log("valid user");
} else {console.log("invalid user");}

});
