$(function () {

    /*===== NAVBAR =====*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.navbar').addClass('black');
        } else {
            $('.navbar').removeClass('black');
        }
    });

    /*===== NAVBAR COLORMENU =====*/

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.color_menu').addClass('black');
        } else {
            $('.color_menu').removeClass('black');
        }
    });

    /*===== navbar mobile view =====*/

    $('.navbar-toggler').click(function () {
        $('.navbar').toggleClass('click_nav');
    });

    /*===== Dark Theme =====*/

    var icon = document.getElementById("icon");

    icon.onclick = function () {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            icon.src = "images/sun.png";
        } else {
            icon.src = "images/moon.png";
        }
    };

    /*===== SMOOTH SCROLL =====*/
    var scroll = new SmoothScroll('a[href*="#"]');

    /*===== TYPED =====*/

    var typed = new Typed('.type', {
        strings: ['abir ali khan.',
                  'a graphic designer.',
                  'a web designer.'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
    });

    /*===== VENOBOX =====*/

    $(document).ready(function () {
        $('.venobox').venobox();
    });

    /*===== SWIPER =====*/

    var swiperH = new Swiper('.swiper-container-h', {
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination-h',
            clickable: true,
        },
    });
    var swiperV = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination-v',
            clickable: true,
        },
    });


    /*===== BACK TO TOP =====*/

    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    $('.colors').each(function () {
        $(this).click(function () {
            let color = $(this).attr('data-color');
            document.documentElement.style.setProperty('--color', color);
        })
    });


});
