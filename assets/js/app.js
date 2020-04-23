const newLocal = setInterval(function () {
    /*jQuery('.humberger-menu').click(function(){
        jQuery('.side-menu').addClass('open');
        jQuery('.ovearlay').addClass('open');
    });
    jQuery('.side-menu ul li').click(function(){
        jQuery('.side-menu').removeClass('open');
        jQuery('.ovearlay').removeClass('open');
    });  
    jQuery('.ovearlay').click(function(){
        jQuery('.side-menu').removeClass('open');
        jQuery('.ovearlay').removeClass('open');
    });*/

    jQuery('.single-slider').owlCarousel({
        loop: true,
        margin: 0,
        smartSpeed: 450,
        autoplay: true,
        nav: false,
        dots: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            980: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
            
}, 100);

 







