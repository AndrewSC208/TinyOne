'use strict';
$(function() {

  var viewWindow = $(window),
      n          = $('nav');

  // this will handel the change in the navbar!
  viewWindow.scroll(function() {

    if(viewWindow.scrollTop() !== 0) {
      // srink nav
      n.removeClass('largeNav');

    } else {
      // bigger nav
      n.addClass('largeNav');
    }

  });

});
