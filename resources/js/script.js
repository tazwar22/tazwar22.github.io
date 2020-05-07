//To run ONLY when the document is READY...

$(document).ready(function(){
    
    
 /*  
    ---------------------Sticky Navigation
 */
//    Select the section
    $('.js--section-about-me').waypoint(function(direction) {
//        Detect if the user is scrolling up/down
        if (direction == "down"){
//            Make sticky nav appear
//            Select the NAV element and add our custom-formatted class
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },{
//        Triggered 80px BEFORE we HIT this section
        offset: '80px;'
    });
    
    
    
    
    
    
// ------------------------   Scrolling effects 
    $('.js-scroll-to-about-me').click(function(){
//        Select HTML and BODY
        $('html, body').animate({scrollTop: $('.js--section-about-me').offset().top}, 1000);
    });
    
    
        // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1500, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    
    
    
    
    
    
    
    
    
    
    
});
