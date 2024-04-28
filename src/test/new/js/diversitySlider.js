$(function () {
	$('.employee-slider.joinus').slick({
        dots: true,
        autoplay: false,
        infinite: false,
        arrows: true,
        centerMode: false,
        centerPadding: '50px',
        initialSlide: 0,
        slidesToShow: 3,
        cssEase: 'ease-in-out',
        swipe: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                centerMode: false,
                initialSlide: 0,
                loop: false,
                dots: true,
                swipe: true
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
                arrows: true,
                initialSlide: 0,
                swipe: true
            }
        }
        ]
    });
    var url = window.location.pathname;
    var arr = url.split('/');
    var pagename = arr[arr.length - 1];
    if (pagename === "sales" || pagename === "sales.html" || pagename === "support" || pagename === "support.html" || pagename === "operation" || pagename === "operation.html" || pagename === "technology" || pagename === "technology.html") {
        $(window).trigger('resize');
    }
});