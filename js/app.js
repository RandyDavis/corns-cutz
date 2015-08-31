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
      $("#nav").toggleClass('expanded');
  });
});


// Date Script
$(function() {
  var dateNow = new Date();
  var yearNow = dateNow.getFullYear();
  var $footerDate = $('#footer');
  $footerDate.after( "<p id='footerCopy' class='text-center'>&copy; " + yearNow + " Corn's Cutz - All Rights Reserved</p>");
  
});
