/*global $, jquery, alert, console*/
$(document).ready(function () {
    
    'use strict';
    
    
        //FOR NAVBAR RESPONSIVE
        if($(window).width() <= 990 ){
        
            $('.nav .icon-nav, .nav ul li a ').click(function () {
                    $('.nav-links').animate({
                        "height" : "toggle"
            
                    });
                });
            }
            ///////////////////////////////////
            //FOR NAVBAR ICON ANIMATION
            var counter = 1;
            $('.nav .icon-nav , .nav ul li a').click(function(){
                counter++;
                if( counter %2 == 0 ){
                    $('.nav .icon-nav .inSecond').css({
                        "transform" : "rotateY(90deg)"
                    });
                    $('.nav .icon-nav .inFerst').css({
                        "marginBottom" : "-9px",
                        "transform" : "rotate(-45deg)"
                    });
                    $('.nav .icon-nav .inThird').css({
                        "marginTop" : "-9px",
                        "transform" : "rotate(45deg)"   
                    });
                    
                }else{
                    $('.nav .icon-nav .inSecond').css({
                        "transform" : "rotateY(0deg)"
                    });
                    $('.nav .icon-nav .inFerst').css({
                        "margin" : "6px 0",
                        "transform" : "rotate(0deg)"
                    });
                    $('.nav .icon-nav .inThird').css({
                        "margin" : "6px 0",
                        "transform" : "rotate(0deg)"   
                    });
                }
            })
    
    
    
});