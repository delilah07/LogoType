$(function () {
    
    //Products Slick Slider
    
    $('.intro__inner, .news__slider').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        
    });
    
    $('.burger-menu').on('click', function(){
       $('.header__nav').slideToggle(); 
        $('.menu-open').toggle();
        $('.menu-close').toggle();
    });
    
});

