// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var windowHeight = $(window).height();
var $contentContainer = $(".contentContainer");

$contentContainer.css("min-height", windowHeight);

// Menu
$(function() {
  $("#mobile-btn").on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(".top-bar").toggleClass('expanded');
      //$("#nav").css({"z-index": "1000"});
  });
});


// Date Script
$(function() {
  var dateNow = new Date();
  var yearNow = dateNow.getFullYear();
  var $footerDate = $('#footer');
  $footerDate.after( "<p id='footerCopy' class='text-center'>&copy; " + yearNow + " Corn's Cutz - All Rights Reserved</p>");
  
});