
$(".hamburger-container").click(function() {
  $(this).toggleClass("open");
});

$(".hamburger-container").click(function() {
  $(".nav-menu").toggleClass("nav--reveal");
});









/*
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
*/
