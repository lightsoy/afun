const $aSlider = $("#aSlider");

$aSlider.slick({
    centerMode: true,
    centerPadding:24,
    slidesToShow: 4,
    focusOnSelect: true,
    arrows: true,

    prevArrow: $(".awards .slideArea .prevArrow"),
    nextArrow: $(".awards .slideArea .nextArrow"),
});