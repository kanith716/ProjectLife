$(function () {
    // News Slider

    var newsSlider = $('.news-slider');

    function minTwoDigits(n) {
        return (n < 10 ? '0' : '') + n;
    }

    if (newsSlider.length) {
        var currentSlide;
        var slidesCount;
        var updateSliderCounter = function (slick, currentIndex) {

            slidesCount = minTwoDigits(slick.slideCount);
            $("#totalNewsSliderCount").text(slidesCount);
            // progress bar width calculation
            let width;
            if (currentIndex === 3) {
                width = (6 / slidesCount) * 100;
                currentSlide = minTwoDigits(06);
            }
            else {
                currentSlide = minTwoDigits(03);
                width = (3 / slidesCount) * 100;
            }
            $('#currentNewsSliderIndex').text(currentSlide);
            $("#news-progress-bar").css({ width: width + "%" });
        };
        newsSlider.on('init', function (event, slick) {
            updateSliderCounter(slick);
        });
        newsSlider.on('afterChange', function (event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        newsSlider.slick({
            dots: false,
            autoplay: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            cssEase: 'ease-in-out',
            speed: 1200,
            variableWidth: true,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: false,
                    infinite: false,
                    loop: true,
                    dots: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    initialSlide: 0,
                }
            }
            ]
        });
    }

    // video-card-slider

    $('.video-card-slider').slick({
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        slideswToScroll: 1,
        arrows: true,
        cssEase: 'ease-in-out',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                infinite: false,
                loop: true,
                dots: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                arrows: true,
                infinite: false,
            }
        }
        ]
    });

    // image-card-slider

    $('.image-card-slider').slick({
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 3,
        slideswToScroll: 1,
        arrows: false,
        cssEase: 'ease-in-out',
        variableWidth: true,
        responsive: [{

            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: false,
                infinite: false,
                loop: true,
                dots: true,
                arrows: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "50px",
                variableWidth: false,
                infinite: false,
                initialSlide: 0,
                arrows: true,
            }
        }
        ]
    });

    // Award Slider

    $('.awards-slider').slick({
        dots: true,
        autoplay: false,
        infinite: false,
        slidesToShow: 3,
        slideswToScroll: 1,
        arrows: false,
        cssEase: 'ease-in-out',
        variableWidth: false,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                loop: true,
                dots: true,
                arrows: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "50px",
                initialSlide: 0,
                infinite: false,
                arrows: true,
            }
        }
        ]
    });
    // Moblie Slider

    $('.mbl-slider').slick({
        dots: true,
        arrows: true,
        cssEase: 'ease-in-out',
        responsive: [{
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "90px",
                initialSlide: 0,
                arrows: true,
                infinite: false,
            }
        },
        {
            breakpoint: 375,
            settings: {
                centerMode: true,
                centerPadding: "75px",
                infinite: false
            }
        }
        ]
    });

    $('.csr-inner-slider').slick({
        dots: false,
        autoplay: false,
        infinite: false,
        arrows: true,
        initialSlide: 0,
        slidesToShow: 1,
        swipe: false,
        fade: true,
        adaptiveHeight: true,
        cssEase: 'ease-in-out',
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                arrows: true,
                slidesToScroll: 1,
                initialSlide: 0,
                loop: true,
                dots: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                initialSlide: 0,
            }
        }
        ]
    });

    $('.csr-img-slider').slick({
        dots: true,
        autoplay: false,
        infinite: true,
        arrows: false,
        initialSlide: 0,
        slidesToShow: 1,
        swipe: true,
        cssEase: 'ease-in-out',
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                loop: true,
                dots: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
            }
        }
        ]
    });
    $('.video-card-set .video-card').click(function () {
        $('.prev-slide-heading').text($('.inner-card.slick-current').prev().find('h2').text());
        $('.next-slide-heading').text($('.inner-card.slick-current').next().find('h2').text());
        var cardIndex = $(this).attr("data-index");
        // alert(cardIndex);
        if (cardIndex != '1' && cardIndex != undefined) {
            $('body').addClass('overflow-hidden');
            $('.csr-inner-slider').slick('slickGoTo', cardIndex - 2);
            setTimeout(function () {
                $('.innerpage-overlay, .innerpage-popup').addClass('active');
            }, 100);
        }
        else {
            window.open("https://brandsite-static.hdfclife.com/media/documents/apps/CSR%20Policy%20-%20Clean_Final.pdf", '_blank');
            $('body').removeClass('overflow-hidden');
        }
    });

    $('.csr-inner-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        setTimeout(function () {
            $('.prev-slide-heading').text($('.inner-card.slick-current').prev().find('h2').text());
            $('.next-slide-heading').text($('.inner-card.slick-current').next().find('h2').text());
        }, 100);
    });
});
