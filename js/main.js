// navbar in responsive
var navIcon = document.getElementsByClassName("navbar-toggler");
navIcon[0].addEventListener("click", function() {
  var navBar = document.getElementsByClassName("navbar");
  
  const navbarToggler = document.getElementsByClassName("navbar-toggler");
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


// news section tab function
function selectNewsCategory(evt, categoryName) {
  var i, newsContent, newsNav;
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
if (document.getElementById("defaultSelect")) {
  document.getElementById("defaultSelect").click();
} 
