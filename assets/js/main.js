
/*$(function() {

  //configuration
  var width = 100%;
  var animationSpeed = 800;
  var pause = 3000;
  var currentSlide = 1;

  //cache DOM
  var $slider = $(".top-image-slider");
  var $sliderContainer = $slider.find(".slides");
  var $slides = $sliderContainer.find(".slide");

  setInterval(function() {
    $sliderContainer.animate({"margin-left": "-=" + width}, animationSpeed, function() {
      currentSlide++;
      if (currentSlide === $slides.length) {
        currentSlide = 1;
        $sliderContainer.css('margin-left', 0);
      }
    });
  }, pause);


  //set interval margin-left
  //if it's the last slide, go to position 1(0px)

  //listen for mouseenter and pause
  //resume on mouseleave
});*/










document.querySelector(".btn").addEventListener("click", calc);
  function calc() {
    var players = document.querySelector(".bowlers").value;
    var games = document.querySelector(".games").value;

    if (games == 1) {
      document.querySelector(".totalPrice").textContent = "The total cost for your booking is " + "£" + players * games * 9;

    } else if (games == 2) {
      document.querySelector(".totalPrice").textContent = "The total cost for your booking is " + "£" + players * games * 7.5;

    } else if (games == 3) {
      document.querySelector(".totalPrice").textContent = "The total cost for your booking is " + "£" + players * games * 6;
    };

};
