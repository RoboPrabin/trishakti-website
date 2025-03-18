(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });

    // $(document).ready(function() {
    //     // Alert the screen width on page load
    //     alert("Screen width: " + $(window).width() + "px");
    
    //     // Optional: Alert the screen width on window resize
    //     $(window).resize(function() {
    //         alert("Screen width: " + $(window).width() + "px");
    //     });
    // });
    

    $(document).ready(function() {
        function adjustTitle() {
            if ($(window).width() > 1635
        ) {  // Large screen (adjust the breakpoint as needed)
                // Remove <br> by replacing with plain text
                $('.goal').html('Your Financial Status Is Our Goal');
            } else {
                // Ensure <br> is present if screen size is small
                if (!$('.goal').html().includes('<br>')) {
                    $('.goal').html('Your Financial Status Is Our<br>Goal');
                }
            }
        }
    
        // Call the function initially
        adjustTitle();
    
        // Re-check on window resize
        $(window).resize(function() {
            adjustTitle();
        });
    });
    



    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
            $('.back-to-top').removeClass('visually-hidden');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

