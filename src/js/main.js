$(document).ready(function () {
    $('.main-menu ul li').on('click', function () {
        $('.main-menu ul li').removeClass('active');
        $(this).addClass('active');
    })
})

// sliders
$(document).ready(function () {
    $('.sphere-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 900,
        responsive: [
            {
                breakpoint: 767,
                settings: "unslick",
            }
        ]
    });
})

// burger
$(document).ready(function () {
    $('.burger').on('click', function () {
        $('.menu-mobile').slideToggle();
    })
    $(window).scroll(function () {
        $('.menu-mobile').slideUp();
    })
    $('.big-item').on('click', function () {
        $(this).addClass('active');
        $(this).children('.subtitle').slideToggle();
    })
})
// tab
// $(document).ready(function () {
//     $('.button-show').on('click', function () {
//         $(this).next().slideToggle();
//         $(this).toggleClass('active');
//     })
// })


// 2 tab
$(document).ready(function () {
    // контент
    var tab = $('.tab-footer__wrapper > div');
    // tab.hide().filter(':first-child').show();

    // Клики по вкладкам.
    $('.tab-footer__list a').click(function () {
        tab.hide();
        tab.filter(this.hash).css('display', 'flex');
        $('.tab-footer__list a').removeClass('active');
        $(this).addClass('active');

        return false;
    }).filter(':first').click();
})

// change preview
$(document).ready(function () {
    // дороги и проезды
    $('a[href="#tab-mini-1"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic1.jpg')
    })
    $('a[href="#tab-mini-2"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic2.jpg')
    })
    $('a[href="#tab-mini-3"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic3.jpg')
    })
    $('a[href="#tab-mini-4"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic4.jpg')
    })
    $('a[href="#tab-mini-5"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic5.jpg')
    })
    // озеленение территории
    $('a[href="#tab-mini-6"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic6.jpg')
    })
    $('a[href="#tab-mini-7"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic7.jpg')
    })
    // промышленные ограждения
    $('a[href="#tab-mini-8"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic18.jpg')
    })
    $('a[href="#tab-mini-9"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic19.jpg')
    })
    $('a[href="#tab-mini-10"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic20.jpg')
    })
    $('a[href="#tab-mini-11"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic21.jpg')
    })
    $('a[href="#tab-mini-12"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic22.jpg')
    })
    // наружное освещение
    $('a[href="#tab-mini-13"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic13.jpg')
    })
    $('a[href="#tab-mini-14"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic14.jpg')
    })
    // устройство дренажа
    $('a[href="#tab-mini-15"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic15.jpg')
    })
    $('a[href="#tab-mini-16"]').on('click', function () {
        $('#preview').attr('src', 'images/previews/services-pic16.jpg')
    })
})