"use strict"
// Contact form

let form = document.getElementById("wrapper");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  let userName = document.getElementById("fname").value;
  let userPhone = document.getElementById("phone").value;
  let userEmail = document.getElementById("lname").value;
  let textArea = document.getElementById("etext").value;

  if (userEmail == "") {
    errors.lname = "Email can not be empty";
  }
  if (userName.length < 4) {
    errors.fname = "Username must be more than 4 characters";
  }
  if (userPhone == "") {
    errors.phone = "Phone can not be empty";
  }
  if (textArea == "") {
    errors.emailtext = "Message field cant be empty   ";
  }
  console.log(errors);
  this.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  for (let item in errors) {
    console.log(item);

    let errorTextElement = document.getElementById("error_" + item);
    console.log(errorTextElement);

    if (errorTextElement) {
      errorTextElement.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});