$(function () {
    if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 991px)").matches) {
        // FOR Tablet
        $(".role-panel .job-card").removeClass('long-card');
        // $(".role-panel .job-card:nth-child(3)").addClass('long-card');
    }

    if (window.matchMedia("(max-width: 767px)").matches) {
        // FOR Mobile
        $(".role-panel .job-card").removeClass('long-card');
    }

    var grid = $('.role-panel').isotope({
        itemSelector: '.cards',
        percentPosition: true,
        masonry: {
            columnWidth: '.job-card',
            gutter: 26,
            // horizontalOrder: true
        }
    });

    grid.on('layoutComplete', function (event, laidOutItems) {
        $('.role-panel > .job-card:nth-child(4)').removeClass('long-card');
        if (window.matchMedia("(min-width: 992px)").matches) {
            // FOR DESKTOP
            if (laidOutItems.length > 4) {
                // grid.isotope('getFilteredItemElements')[3].classList.add("long-card");
            }
        }
        if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 991px)").matches) {
            $('.role-panel > .cards').removeClass('long-card');
            if (laidOutItems.length > 3) {
                // grid.isotope('getFilteredItemElements')[2].classList.add("long-card");

            }
        }
    });

    $('.role li').click(function () {
        $('.role li').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        grid.isotope({
            filter: selector
        });
        setTimeout(function () {
            grid.isotope('layout');
        }, 600);
        return false;
    });
});