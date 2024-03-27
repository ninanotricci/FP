"use strict";

let navigation = document.getElementById("navBar");
let burger = document.getElementById("burgerBar");
let navigationForms = document.getElementById("navForms");

burger.addEventListener("click", function () {
  navigation.classList.toggle("activeNav");
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
      let div = document.createElement("div");

      reviewData.data.forEach((element) => {
        console.log(element);
        let p = document.createElement("p");
        p.textContent = `${element.name} ${element.body}`;
        div.appendChild(p);
      });
      document.getElementById("reviews").appendChild(div);
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
