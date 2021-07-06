$(document).ready(function () {
    //слайдер 1
    $('.header__slider').slick({
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        infinite: false
    });
    
    // меню
    $('.header__link').click(function () {
        
        const next = $(this).next();
        if (next.hasClass('sublist__item-active')) {
            next.removeClass('sublist__item-active');
        } else {
            $('.sublist__item').removeClass('sublist__item-active')
            next.addClass('sublist__item-active');
        }

    });

// слайдер 2
    $('.games__slider-item').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        dots: false,
        variableWidth: true,
        appendArrows:$('.games__section-title'),
        centerMode: true,
        centerPadding: '0',
    });
});
    
   
    
    
    
    
    


   

