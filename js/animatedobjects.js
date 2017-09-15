$(document).ready(function() {
       $('.first').addClass('animated zoomIn');
        // hide our element on page load
//        $('#quality').css('opacity', 0);

        $('.peti').waypoint(function() {
            $('.peti').addClass('animated2 zoomIn');
             setTimeout(function() {
       $('.peti').removeClass("zoomIn").addClass("infinite pulse");
   }, 2000);
        },                          
                              {
            offset: '50%'
        });
        $('.sesti').waypoint(function() {
            $('.sesti').addClass('animated2 fadeInRight');
        },                          
                              {
            offset: '50%'
        });
    $('.sedmi').waypoint(function() {
            $('.sedmi').addClass('animated2 fadeInLeft');
        },                          
                              {
            offset: '50%'
        });
    $('.osmi').waypoint(function() {
            $('.osmi').addClass('animated2 bounceInRight');
        },                          
                              {
            offset: '50%'
        });
    
    
    $('.deveti').waypoint(function() {
            $('.deveti').addClass('animated fadeInUp');
        },                          
                              {
            offset: '70%'
        });
    $('.deseti').waypoint(function() {
            $('.deseti').addClass('animated2 fadeInUp');
        },                          
                              {
            offset: '70%'
        });
    $('.last').waypoint(function() {
            $('.last').addClass('animated fadeInUp');
        },                          
                              {
            offset: '100%'
        });
    
     setTimeout(function() {
       $('.prvi, .cetvrti').removeClass("fadeInLeft fadeInUp zoomIn").addClass("infinite pulse");
   }, 2000);
    
    
    });


