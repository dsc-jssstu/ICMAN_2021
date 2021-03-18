
(function($) {
  "use strict";

//Timer
  $('#clock-b').countdown('2021/12/18').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span class="h1 font-weight-bold">%D</span><b>Day%!d</b>'
      + '<span class="h1 font-weight-bold">%H</span><b> Hr</b>'
      + '<span class="h1 font-weight-bold">%M</span><b> Min</b>'
      + '<span class="h1 font-weight-bold">%S</span><b> Sec</b>'));
  });


})(jQuery);

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }


}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
