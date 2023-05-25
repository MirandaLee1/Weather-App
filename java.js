
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let day = days[now.getDay()];

let hours = now.getHours();
let minutes = now.getMinutes();


let dayandtime = document.querySelector("h2")
dayandtime.innerHTML = `${day} ${hours}:${minutes}`;



let city = document.querySelector("h1")

city.innerHTML("")