$(document).ready(function() {
       $('.carousel-caption').addClass('animated zoomIn');
        // hide our element on page load
//        $('#quality').css('opacity', 0);

        $('.itemleft').waypoint(function() {
            $('.itemleft').addClass('animated2 fadeInLeft');
            $('.itemright').addClass('animated2 fadeInRight');
            $('.itemdown').addClass('animated2 fadeInDown');
            $('.itemup').addClass('animated2 fadeInUp');
            
        },                          
                              {
            offset: '50%'
        });
        $('.panel1').waypoint(function() {
            $('.panel1').addClass('animated2 fadeInLeft');
            $('.image1').addClass('animated fadeInDown');
            
        },                          
                              {
            offset: '50%'
        });
     $('.panel2').waypoint(function() {
            $('.panel2').addClass('animated2 fadeInRight');
            $('.image2').addClass('animated fadeInUp');
            
        },                          
                              {
            offset: '50%'
        });
     $('.panel3').waypoint(function() {
            $('.panel3').addClass('animated2 fadeInLeft');
            $('.image3').addClass('animated fadeInUp');
            
        },                          
                              {
            offset: '50%'
        });
     $('.panel4').waypoint(function() {
            $('.panel4').addClass('animated2 fadeInRight');
            $('.image4').addClass('animated fadeInUp');
            $('.imagelast').addClass('animated pulse infinite');
            
        },                          
                              {
            offset: '50%'
        });
    
    $('.teamimg1').waypoint(function () {
    $('.memberinfo').addClass('animated3 bounceInUp');    
    $('.teamimg1').addClass('animated zoomIn');
    setTimeout(function () {
        $('.teamimg2').addClass('animated zoomIn');
    }, 500);
    setTimeout(function () {
        $('.teamimg3').addClass('animated zoomIn');
    }, 1000);


}, {
    offset: '50%'
});
     
    
    
    
    });


