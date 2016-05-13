'use strict';
$(function() {

  // navbar scroll var's:
  var viewWindow = $(window),
      n          = $('nav');

  // Navbar animation:
  viewWindow.scroll(function() {

    if(viewWindow.scrollTop() === 0) {
      // srink nav
      
    } else {
      // bigger nav
      
    }

  });

  // Arrow bounce animation:
  var arrow = $('#arrow');

  // arrow.animate({
  //   'top' : '+=10px'
  // }, {
  //   duration: 1000,
  //   function(){
  //     arrow.animate({
        
  //     })
  //   }
  // });

});
