$(window).resize(function() {
  var more = document.getElementById("js-navigation-more");
  var windowWidth = $(window).width();
  var moreLeftSideToPageLeftSide = $(more).offset().left;
  var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

  if (moreLeftSideToPageRightSide < 330) {
    $("#js-navigation-more .submenu .submenu").removeClass("fly-out-right");
    $("#js-navigation-more .submenu .submenu").addClass("fly-out-left");
  }

  if (moreLeftSideToPageRightSide > 330) {
    $("#js-navigation-more .submenu .submenu").removeClass("fly-out-left");
    $("#js-navigation-more .submenu .submenu").addClass("fly-out-right");
  }
});

$(document).ready(function() {
  var menuToggle = $("#js-mobile-menu").unbind();
  $("#js-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-navigation-menu").slideToggle(function(){
      if($("#js-navigation-menu").is(":hidden")) {
        $("#js-navigation-menu").removeAttr("style");
      }
    });
  });
});

$('.container').mixItUp();

/*Deal Page*/
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

/*contact page*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
