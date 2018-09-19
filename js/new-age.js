(function($) {
  "use strict"; // Start of use strict

  // Open book animation
  $('#open-book-button').click(function(){
    $('.book span').addClass('animation');
    setTimeout(function(){
    window.open('knjiga.pdf','_self');
    }, 3000);
  })

})(jQuery); // End of use strict
