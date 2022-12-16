// banner slider
const slides = document.querySelectorAll(".slider");
const controls = document.querySelectorAll(".control");
let activeSlide = 0;
let prevActive = 0;

changeSlides();
let int = setInterval(changeSlides, 4000);

function changeSlides() {
  slides[prevActive].classList.remove("active");
  controls[prevActive].classList.remove("active");

  slides[activeSlide].classList.add("active");
  controls[activeSlide].classList.add("active");

  prevActive = activeSlide++;

  if (activeSlide >= slides.length) {
    activeSlide = 0;
  }
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    let idx = [...controls].findIndex((c) => c === control);
    activeSlide = idx;

    changeSlides();

    clearInterval(int);
    int = setInterval(changeSlides, 4000);
  });
});


// card carousel
var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}


// news section tab function
function selectNewsCategory(evt, categoryName) {
  var i, tabcontent, tablinks;
  newsContent = document.getElementsByClassName("news-content");
  for (i = 0; i < newsContent.length; i++) {
    newsContent[i].style.display = "none";
  }
  newsNav = document.getElementsByClassName("news-nav");
  for (i = 0; i < newsNav.length; i++) {
    newsNav[i].className = newsNav[i].className.replace(" active", "");
  }
  document.getElementById(categoryName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultSelect").click();
