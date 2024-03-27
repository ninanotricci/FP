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
