let leftButton = document.querySelector(".left-button");
let rightButton = document.querySelector(".right-button");

let sliderImage = document.querySelectorAll(".container > img");


var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function stopInterval() {
    clearInterval(slideInterval);
}

function nextSlide() {
    currentSlide += 1;
    stopInterval();
    console.log(currentSlide);
}

function previousSlide() {
    currentSlide -= 1;
    stopInterval();
    console.log(currentSlide);
}

leftButton.addEventListener("click", previousSlide());
rightButton.addEventListener("click", nextSlide());