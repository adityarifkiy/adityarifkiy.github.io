// responsive navbar
let toogle = document.querySelector(".icon");
let menu = document.querySelector(".menu");
let item = document.querySelector(".nav-item");

function myFunction() {
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
}

// Select the elements with the class you want to remove
const elements = document.querySelectorAll(".card");

// Create a media query that matches the viewport size you want to target
const mediaQuery = window.matchMedia("(min-width: 900px)");

// Define a function to remove the class from the elements
function removeClass() {
  elements.forEach((element) => {
    element.classList.remove("card");
  });
}

function addClass() {
  elements.forEach((element) => {
    element.classList.add("card");
  });
}

// Call the function initially to remove the class if the viewport matches the media query
if (mediaQuery.matches) {
  removeClass();
}

// Add an event listener to the media query to call the function when the viewport size changes
mediaQuery.addEventListener("change", (event) => {
  console.log(event);
  if (event.matches) {
    removeClass();
  } else {
    addClass();
  }
});

setInterval(() => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const times = `${hours}:${minutes}:${seconds}`;
  document.querySelector("#clock").innerHTML = `<span>-- ${times} --</span>`;
}, 1000);
