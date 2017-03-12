// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    //looping for image gallery
    $(document).ready(function() {
        for (var i = 1; i < 7; i++) {
            $('#image-gallery').append('<div class="col-lg-4 col-sm-6" style="padding-right:0px;padding-left:0px;"><a href="img/portfolio/fullsize/'+i+'.jpg" class="portfolio-box"><img src="img/portfolio/thumbnails/'+i+'.jpg" class="img-responsive" alt=""></a></div>');
        }  
    });

    $('#load-images').click(function(){
        for (var i = 1; i < 7; i++) {
            $('#image-gallery').append('<div class="col-lg-4 col-sm-6" style="padding-right:0px;padding-left:0px;"><a href="img/portfolio/fullsize/'+i+'.jpg" class="portfolio-box"><img src="img/portfolio/thumbnails/'+i+'.jpg" class="img-responsive" alt=""></a></div>');
        }
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
