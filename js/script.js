const dots = document.querySelectorAll(".dot");
const cards = document.querySelectorAll(".card");

let currentActive = 0;

window.onload = () => {
  cards[currentActive].classList.add("active");
  dots[currentActive].classList.add("active");
};

const findCurrentActive = () => {
  const dotActive = document.querySelector(".dot.active");
  const cardActive = document.querySelector(".card.active");
  dotActive.classList.remove("active");
  cardActive.classList.remove("active");
};

for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function () {
    findCurrentActive();
    dots[i].classList.add("active");
    cards[i].classList.add("active");
  };
  cards[i].onclick = function () {
    findCurrentActive();
    dots[i].classList.add("active");
    cards[i].classList.add("active");
  };
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) slideIndex = 1;

  if (n < 1) slideIndex = x.length;

  for (i = 0; i < x.length; i++) x[i].style.display = "none";

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-orange", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-orange";
}

var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
  displaySlides((slide_index += n));
}

function currentSlide(n) {
  displaySlides((slide_index = n));
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) slide_index = 1;

  if (n < 1) slide_index = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }

  slides[slide_index - 1].style.display = "block";
  slides[slide_index - 1].classList.add("active");
}

function displayvideo(n) {
  var i;
  var slides = document.getElementsByClassName("container");
  if (n > slides.length) slide_index = 1;

  if (n < 1) slide_index = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }

  slides[slide_index - 1].style.display = "block";
  slides[slide_index - 1].classList.add("active");
}