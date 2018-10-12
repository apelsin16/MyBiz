let leftButton = document.querySelector(".left-button");
let rightButton = document.querySelector(".right-button");
let regButtons = document.querySelectorAll(".reg-buttons");

function Slider() {
    this.currentSlide = 0;

    this.slider = document.querySelector(".slide-image");

    this.setImage = function() { // Setting attr of src
        let imageSource = "./images/slide-" + this.currentSlide + ".jpg";
        this.slider.src = imageSource;
    }

    this.stopInterval = function() {
        clearInterval(this.slideInterval);
    }

    this.goToSlide = function(n) {
        this.currentSlide = (n + 15) % 15; // 15 is number of photos
    }

    this.previousSlide = function() {
        this.goToSlide(this.currentSlide - 1);
    }

    this.nextSlide = function() {
        this.goToSlide(this.currentSlide + 1);
    }
}

let sliderFunc = new Slider();

sliderFunc.setImage(); // Slider init on first picture with index 0

let slideInterval = setInterval(function() {
    sliderFunc.nextSlide();
    sliderFunc.setImage();
}, 5000)

leftButton.onclick = function() {
    sliderFunc.previousSlide();

    sliderFunc.stopInterval(); // Stop auto slide

    sliderFunc.setImage();
}

rightButton.onclick = function() {
    sliderFunc.nextSlide();

    sliderFunc.stopInterval(); // Stop auto slide

    sliderFunc.setImage();
}