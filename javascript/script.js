"use strict";

let navigation = document.getElementById("navBar");
let burger = document.getElementById("burgerBar");
let navigationForms = document.getElementById("navForms");

burger.addEventListener("click", function () {
  navigation.classList.toggle("activeNav");
});

// Contact form

let form = document.getElementById("wrapper");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  let userName = document.getElementById("fname").value;
  let userPhone = document.getElementById("phone").value;
  let userEmail = document.getElementById("email").value;
  let textArea = document.getElementById("etext").value;

  if (userEmail == "") {
    errors.email = "Email can not be empty";
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

// Fetch
fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
  method: "GET",
})
  .then(function (response) {
    console.log(response);
    if (!response.ok) {
      throw response.status;
    }
    return response.json();
  })
  .then(function (reviewData) {
    let ul = document.createElement("ul");

    reviewData.data.forEach((element) => {
      console.log(element);
      let li = document.createElement("li");
      li.textContent = `${element.name} ${element.text}`;
      ul.appendChild(li);
    });
    document.getElementById("reviews").appendChild(ul);
  })
  .catch(function (error) {
    console.log(error);
    if (error === 404) {
      let p = document.createElement("p");
      p.textContent = "Page Not Found";
      document.getElementById("reviews").appendChild(p);
    } else if (error === 500) {
      let p = document.createElement("p");
      p.textContent = "Server Error";
      document.getElementById("reviews").appendChild(p);
    }
  });
