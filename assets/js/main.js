
$(".hamburger-container").click(function() {
  $(this).toggleClass("open");
});

$(".hamburger-container").click(function() {
  $(".nav-menu").toggleClass("nav--reveal");
});

$(".bowling-icon__home-btn").mousedown(function() {
  $(this).toggleClass("btn--scale");
});

$(".bowling-icon__home-btn").mouseup(function() {
  $(this).toggleClass("btn--scale");
});

$(".nav li").mousedown(function() {
  $(this).toggleClass("btn--scale");
});

$(".nav li").mouseup(function() {
  $(this).toggleClass("btn--scale");
});

$(".book-now").click(function() {
  $(".make-booking-modal").toggleClass("modal-fadein");
});

$(".modal__close").click(function() {
  $(".make-booking-modal").toggleClass("modal-fadein");
});

document.querySelector(".btn").addEventListener("click", calc);
  function calc() {
    var adult = document.querySelector(".adult-bowlers").value;
    var juniors = document.querySelector(".junior-bowlers").value;
    var games = document.querySelector(".games").value;

   var totalPrice = ((adult * 8 + juniors * 4) * games);

    document.querySelector(".totalPrice").textContent = "The total cost for your booking is " + "£" + totalPrice;

};
