'use strict';
$(document).ready(function(){

  var viewWindow = $(window),
      n = $('nav'),
      arrow = $('#arrow');

  // Navbar animation:
  n.addClass('largeNav');
  viewWindow.scroll(function() {
    if(viewWindow.scrollTop() !== 0) {
      n.removeClass('largeNav', 300);
    } else {
      n.addClass('largeNav', 300);
    }
  });

  // arrow bounce animation: [THIS WILL WORK FOR NOW BUT I THINK THAT IT MIGHT BE FUN TO EXPAND ON THIS AT A LATER TIME]
  function bounceArrowDown(){
    arrow.animate({
      top: '+=7px'
    }, 400);
  }

  function bounceArrowUp(){
    arrow.animate({
      top: '-=7px'
    }, 400);
  }

  for(var i = 0; i < 100; i++) {
    bounceArrowDown();
    bounceArrowUp();
  }

  // TyperWriter effect: [GOAL: To print out the main h1 like someone is typing it]

  // close the nav dropdown when link clicked: [ I could navigate this to make it look a little better ]
  $('.dropdown-menu a').click(function() {
    $('.dropdown').removeClass('open');
  });

  // scroll transition to sections!
  $(function () {

    $('a[href^="#"]').click(function(event) {
    var id = $(this).attr('href');
    var offset = 0;
    var target = $(id).offset().top - offset;

    $('html, body').animate({ scrollTop: target }, 500);
      event.preventDefault();
    });

  });
});
