"use strict";

let navigation = document.getElementById("navBar");
let burger = document.getElementById("burgerBar");
let navigationForms = document.getElementById("navForms");

burger.addEventListener("click", function () {
  navigation.classList.toggle("activeNav");
});
