var colorOne = "#F3F3F3";
var colorTwo = "#BDC9C6";

$(window).on("scroll touchmove", function () {
  if ($(document).scrollTop() >= $("#first-section").position().top) {
    $(".main-content").css("background-color", colorOne);
    $(".main-content").css("transition", "all 0.5s ease-out");
  };
  if ($(document).scrollTop() > $("#second-section").position().top) {
    $(".main-content").css("background-color", colorTwo);
    $(".main-content").css("transition", "all 0.5s ease-out");
  };
});