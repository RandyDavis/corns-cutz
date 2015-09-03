// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var windowHeight = $(window).height();
var $contentContainer = $(".contentContainer");

$contentContainer.css("min-height", windowHeight);


//// Down Nav Arrow
//$(function() {
//    var $heroText = $("#main-hero-text");
//    var $downArrow = $("a#down-chevron");
//
//    //$heroText.append($downArrow).css({
//    //    "marginTop": "100px",
//    //    "position": "relative",
//    //    "top": "150px",
//    //    "left": "25px",
//    //    //"color": "white"
//    //
//    //});;
//});

// Menu
$(function() {
  $("#mobile-btn").on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(".top-bar").toggleClass('expanded');
  });
});


// Date Script
$(function() {
  var dateNow = new Date();
  var yearNow = dateNow.getFullYear();
  var $footerDate = $('#footer');
  $footerDate.after( "<p id='footerCopy' class='text-center'>&copy; " + yearNow + " Corn's Cutz - All Rights Reserved</p>");
  
});