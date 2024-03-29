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
.then(function(response) {
    if (!response.ok) {
        throw response.status;
    }
    return response.json();
})
.then(function(reviewData) {
    let ul = document.createElement("ul");

    reviewData.forEach((element) => {
        let li = document.createElement("li");
        li.textContent = `${element.name}: ${element.body}`;
        ul.appendChild(li);

        
        let br = document.createElement("br");
        ul.appendChild(br);
    });
    document.getElementById("reviews").appendChild(ul);
})
.catch(function(error) {
    console.log(error);
    if (error === 404) {
        let li = document.createElement("p");
        li.textContent = "Page Not Found";
        document.getElementById("reviews").appendChild(li);
    } else if (error === 500) {
        let li = document.createElement("p");
        li.textContent = "Server Error";
        document.getElementById("reviews").appendChild(li);
    }
});