// responsive navbar
let toogle = document.querySelector(".icon");
let menu = document.querySelector(".menu");
let item = document.querySelector(".nav-item");
let header = document.querySelector(".hero-header");
let username = prompt("Kasih tau nama kamu dong?");

header.innerHTML = `Hi ${username}, Welcome To My Website`;

function myFunction() {
  if (menu.className === "menu") {
    menu.className += " active";
  } else {
    menu.className = "menu";
  }
}

function functionInput() {
  // input
  let nama = document.querySelector("#name").value;
  let birth = document.querySelector("#birth").value;
  let gender = document.querySelector('input[name="gender"]').value;
  let message = document.querySelector("#pesan").value;

  //output
  document.querySelector("#names").innerHTML = `Name: ${nama}`;
  document.querySelector("#births").innerHTML = `Tanggal Lahir: ${birth}`;
  document.querySelector("#genders").innerHTML = `Jenis Kelamin: ${gender}`;
  document.querySelector("#messages").innerHTML = `Pesan: ${message}`;

  //reset form
  document.querySelector("#name").value = "";
  document.querySelector("#birth").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.querySelector("#pesan").value = "";
}

setInterval(() => {
  const now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dayNum = now.getDate();
  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const times = `${day}, ${dayNum} ${month} ${year} ${hours}:${minutes}:${seconds}`;
  document.querySelector("#time").innerHTML = `Current time: ${times}`;
}, 1000);
