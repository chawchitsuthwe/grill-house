$(document).ready(function(){
  // navbar in responsive
  $(".navbar-toggler").click(function() {
    if(!$(".navbar-toggler").hasClass("collapsed")) {
      $(".navbar").addClass("overlay-nav");
    } else {
      $(".navbar").removeClass("overlay-nav");
    }
  });

  // scroll to top
  $("#page-top").click(function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

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
