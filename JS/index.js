var video = document.getElementById("my-video");
video.playbackRate = 0.9;

const nyctopping = document.querySelector(".nyCheesecaketoppings");
const spanishtopping = document.querySelector(".spanishCheesecaketoppings");
const nyccheescakeOrderNumber = document.querySelector("#nyccheesecake");
const spanishCheeseCakeOrderNumber = document.querySelector(
  "#spanishcheesecake"
);
nyctopping.style.display = "none";
spanishtopping.style.display = "none";

nyccheescakeOrderNumber.addEventListener("click", function () {
  nyctopping.style.display = "block";
});

spanishCheeseCakeOrderNumber.addEventListener("click", function () {
  spanishtopping.style.display = "block";
});
