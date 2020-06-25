var backgroundImages = [
"../img/icecream-slider-1.png",
"../img/icecream-slider-2.png",
"../img/icecream-slider-3.png"
];
var feedbackLink = document.querySelector(".feedback");
var feedbackPopup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var modalClose = feedbackPopup.querySelector(".modal-close");
var sliderButtons = document.querySelectorAll(".checkbox-button");
var body = document.body;

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    overlay.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
    }  
});

var addSliderEventHandler = function (bgImage, sliderButton) {
    sliderButton.addEventListener('click', function () {
        body.style.backgroundImage = 'url(bgImage)';
    });
};

for (var i = 0; i < backgroundImages.length; i++) {
    addSliderEventHandler(backgroundImages[i], sliderButtons[i]);
}