/*
alert("Hello");
let tar = document.getElementById("tar");
let name = prompt("what is your name?");

tar.innerText = "hello, " + theirname;

tar.innerHTML = Date();

setInterval(function () {
  tar.innerHTML = new Date();
}, 1000);
*/
/*
let tar = document.getElementById("tar");

const then = new Date();
const future = new Date("20 March 2023");


const clockInterval = setInterval(function () {
  const now = new Date();

  tar.innerHTML = now.toLocaleDateString() + " " + now.toLocaleTimeString();

  tar.innerText = future - now;
}, 250);
*/
let tar = document.getElementById("tar");

const clockInterval = setInterval(function () {
  const now = new Date();

  tar.innerHTML = now.toLocaleDateString() + " " + now.toLocaleTimeString();

  tar.innerText = future - now;
}, 250);
/*  
const then = new Date();
const future = new Date("16:00 14 March 2023");



tar.addEventListener("click", function () {
  /*console.log('before we click, click is'clicked) = true;

  if (clicked == true) {
    clicked = false;
  } else {
    clicked = true;
  }

  bar.style.setProperty("width", "100%");

  console.log("after we click, clicked is", clicked);

  tar.classList.toggle("dark");
});
*/
