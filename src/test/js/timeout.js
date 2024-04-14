

$(function () {
    var elemOffset = $('.value-section').offset().top;
    setTimeout(function () {
        $('.values').addClass('active');
    }, 200);
    $('.values .values-cont-list li').mouseleave(function () {
        $(this).addClass('no-delay');
    });
});