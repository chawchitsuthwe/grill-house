// navbar in responsive
var navIcon = document.getElementsByClassName("navbar-toggler");
navIcon[0].addEventListener("click", function() {
  var navBar = document.getElementsByClassName("navbar");
  
  const navbarToggler = document.getElementsByClassName("navbar-toggler");
  console.log(navbarToggler)
  if(!navbarToggler[0].classList.contains("collapsed")) {
    navBar[0].classList.add("overlay-nav");
  } else {
    navBar[0].classList.remove("overlay-nav");
  }
});

// scroll to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var pageTop = document.getElementById("page-top");
pageTop.addEventListener("click", topFunction);
