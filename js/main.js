/*
    Template Name: Nexo App Landing Page Template
    Description: This is html5 template
    Author: HasTech
    Version: 1.0
*/
/*================================================
[  Table of contents  ]
================================================
	01. Sticky Menu
	02. One Page Nav
	03. jQuery MeanMenu
	07. Magnific Popup Video
	04. Counter Up
	05. ScrollUp
	06. Wow js
	08. Slick Carousel 
 
======================================
[ End table content ]
======================================*/

(function ($) {
	"use strict";
    
/*------------------------------------
    01. Sticky Menu
-------------------------------------- */  
    var windows = $(window);
    var stick = $(".header-sticky");
	windows.on('scroll',function() {    
		var scroll = windows.scrollTop();
		if (scroll < 245) {
			stick.removeClass("sticky");
            $('.lang').fadeIn('slow');
		}else{
			stick.addClass("sticky");
            $('.lang').hide();
		}
	}); 
    
/*--------------------------------
    02. One Page Nav
-----------------------------------*/
    var top_offset = $('.main-menu').height() -38;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset
    });
    
/*-------------------------------------------
    03. jQuery MeanMenu
--------------------------------------------- */
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });
    
/*-----------------------------------------
    07. Magnific Popup Video
------------------------------------------- */		
     $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
        
/*------------------------------------
	08. Slick Carousel 
--------------------------------------*/
/*------------------------------------
	Screenshots Slick Carousel 
--------------------------------------*/
    $('.slick-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '240px',
		responsive: [
			{
			  breakpoint: 1400,
			  settings: {
                centerPadding: '235px',
			  }
			},
			{
			  breakpoint: 1199,
			  settings: {
                centerPadding: '188px',
			  }
			},
			{
			  breakpoint: 991,
			  settings: {
                centerPadding: '145px',
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
                centerPadding: '140px',
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
                centerPadding: '0',
			  }
			}
		]
    });
    
/*--------------------------------
	Testimonial Slick Carousel
-----------------------------------*/
    $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    
/*------------------------------------
	Testimonial Slick Carousel as Nav
--------------------------------------*/
    $('.testimonial-image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        responsive: [
            {
              breakpoint: 450,
              settings: {
                dots: false,
                slidesToShow: 3,  
                centerPadding: '0px',
                }
            },
            {
              breakpoint: 420,
              settings: {
                dots: false,
                slidesToShow: 3,
                }
            }
        ]
    });
    
    /*----------------------------------------
    02. Owl Carousel
---------------------------------------- */
/*----------------------------------------
    Slider Text Carousel
---------------------------------------- */
    $(".slider-carousel").owlCarousel({
        loop:true,
        smartSpeed: 2500,
        nav:true,
        navText: ["<i class='zmdi zmdi-caret-left'></i>","<i class='zmdi zmdi-caret-right'></i>"],
        items:1,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
/*----------------------------------------
    Slider Full Carousel
---------------------------------------- */
    $(".slider-full-carousel").owlCarousel({
        loop:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 2500,
        nav:true,
        navText: ["<i class='zmdi zmdi-caret-left'></i>","<i class='zmdi zmdi-caret-right'></i>"],
        items:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
/*-----------------------------------------
    04. Counter Up
------------------------------------------ */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    });
	
/*------------------------------------------
    05. ScrollUp
------------------------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-long-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });  
    
/*-------------------------------------------
    06. Wow js
--------------------------------------------- */    
    new WOW().init();

/*-------------------------------------------
    08. Scrolly Parallax js
--------------------------------------------- */ 
    $('.parallax').scrolly({bgParallax: true});
    
/*------------------------------------
	09. Video Player
--------------------------------------*/
    $(".player").YTPlayer({
        showControls: false
    }); 
    
})(jQuery);  