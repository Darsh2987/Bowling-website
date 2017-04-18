
// SCRIPT FOR HAMBURGER ICON
$(".hamburger-container").click(function() {
  $(this).toggleClass("open");
});
// END OF SCRIPT FOR HAMBURGER ICON



// SCRIPT FOR MOBILE NAV MENU WHEN HAMBURGER ICON IS CLICKED
$(".hamburger-container").click(function() {
  $(".nav-menu").toggleClass("nav--reveal");
});
// END OF SCRIPT FOR MOBILE NAV MENU WHEN HAMBURGER ICON IS CLICKED



// SCRIPT FOR BOWLING ICON - SCALED DOWN WHEN CLICKED
$(".bowling-icon__home-btn").mousedown(function() {
  $(this).toggleClass("btn--scale");
});

$(".bowling-icon__home-btn").mouseup(function() {
  $(this).toggleClass("btn--scale");
});
// END OF SCRIPT FOR BOWLING ICON - SCALED DOWN WHEN CLICKED



// SCRIPT FOR NAV LINKS - SCALED DOWN WHEN CLICKED
$(".nav li").mousedown(function() {
  $(this).toggleClass("btn--scale");
});

$(".nav li").mouseup(function() {
  $(this).toggleClass("btn--scale");
});
// END OF SCRIPT FOR NAV LINKS - SCALED DOWN WHEN CLICKED



// SCRIPT FOR BOOK-NOW BUTTON - WHEN CLICK MODAL ANIMATE'S IN
$(".book-now").click(function() {
  $(".make-booking-modal").toggleClass("modal-fadein");
});

$(".modal__close").click(function() {
  $(".make-booking-modal").toggleClass("modal-fadein");
});
// END OF SCRIPT FOR BOOK-NOW BUTTON - WHEN CLICK MODAL ANIMATE'S IN



// SCRIPT FOR PAGE SMOOTH SCROLLING
var headerHeight = $("header").outerHeight();

$(".nav-item").click(function(e) {
  var linkHref = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(linkHref).offset().top - headerHeight - 17
  });
  e.preventDefault();
});
// END OF SCRIPT FOR PAGE SMOOTH SCROLLING


/*
SCRIPT FOR BOOKING SYSTEM -
PRICE QUOTE CALCULATION WHEN "get price" IS CLICKED
CONFIRM BUTTON
*/

$(function() {
	$('#time').timepicker();
});


document.querySelector(".btn").addEventListener("click", calc);
  function calc() {
    var adult = document.querySelector(".adult-bowlers").value;
    var juniors = document.querySelector(".junior-bowlers").value;
    var games = document.querySelector(".games").value;
    var totalPrice = ((adult * 8 + juniors * 4) * games);

    if (adult == 0 && juniors == 0) {
      alert("Please select an option for either Adult Bowlers and or Junior Bowlers");
    } else {
      document.querySelector(".totalPrice").textContent = "The total cost for your booking is " + "£" + totalPrice;
    }
};

document.querySelector(".confirm").addEventListener("click", confirm);
  function confirm() {
    var adult = document.querySelector(".adult-bowlers").value;
    var juniors = document.querySelector(".junior-bowlers").value;
    if (adult == 0 && juniors == 0) {
      alert('You must select at least one player for adults or junior. Be sure to click "Get Price" to get a quote for your booking before confirming.');
    } else {
      alert("Thank you. Your booking has been processed, you will recieve a confirmation email sortly. Please present this email when you arrive.")
    }
  };

/*
END OF SCRIPT FOR BOOKING SYSTEM -
PRICE QUOTE CALCULATION WHEN "get price" IS CLICKED
CONFIRM BUTTON
*/
