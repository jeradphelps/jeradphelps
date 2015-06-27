// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//







// todo, arrow key listeners.  see parallax js for example
// todo resize event, figure out what page the person was on and scroll to it.

$(document).ready(function() {
  // Scroll listeners for arrow buttons
  $('i[class*="down"]').click(function() {
    var currentPage = $(this).closest('.page');
    var destinationPage = currentPage.next('.page');
    // destinationPage.css('display', 'block');
    $.smoothScroll({ 
      scrollTarget: destinationPage,
      beforeScroll: function() { destinationPage.css('display', 'block'); },
      afterScroll: function() { currentPage.css('display', 'none'); }
     });
    // $.smoothScroll({ 
    //   scrollTarget: destinationPage
    //  });
    
    return false;
  });
  $('i[class*="up"]').click(function() {
    var currentPage = $(this).closest('.page');
    var destinationPage = currentPage.prev('.page');
    // destinationPage.css('display', 'block');
    $.smoothScroll({ 
      scrollTarget: destinationPage,
      beforeScroll: function() { destinationPage.css('display', 'block'); },
      afterScroll: function() { currentPage.css('display', 'none'); }
     });
    
    return false;
  });


  // Scroll listeners for arrow keys (38 - up, 40 - down)
  // $(document).keydown(function(e){
  //   if (e.keyCode == 38 || e.keyCode == 40) {

  //     // Add a class to the topmost element
  //     var scrollTop = $(window).scrollTop();
  //     var windowHeight = $(window).height();    
  //     var first = false;
  //     $("body").find('*').each(function() {
  //       var offset = $(this).offset();
  //       if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight) && first == false) {
  //         $(this).addClass("top-of-window");
  //         first=true;
  //       } else {
  //         $(this).removeClass("top-of-window");
  //         first=false;
  //       }
  //     });

  //     if (e.keyCode == 40) {
  //       // use that class to figure out what page we are on and scroll accordingly
  //       $.smoothScroll({ scrollTarget: $('.top-of-window').closest('.page').next('.page') });
  //     } else {
  //       $.smoothScroll({ scrollTarget: $('.top-of-window').closest('.page').prev('.page') });
  //     }
  //   }
  // });
});
