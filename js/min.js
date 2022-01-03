$(function (){
    "use strict";
   /*
    // slider hight
    
    var winH = $(window).height(),
        navbar = $(".navbar").innerHeight(),
        upperBar = $(".upper-bar").innerHeight();
    // innerHeight  = paddning - margin to calck
    $(".testimonials,.testimonials .carousel-item").height( winH - (navbar + upperBar));
    */
    
   //   Featurd-work Shuffel 
    
    $('.featurd-work ul li ').on('click' , function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
        if($(this).data('class') === 'all') {
            
          $('.shuffel-up .col-sm').css('opacity' , 1); 
        } else {
            
           $('.shuffel-up .col-sm').css('opacity' , '.08');
           $($(this).data('class')).parent().css('opacity' , 1);
        }
    });
    
    
    

});
