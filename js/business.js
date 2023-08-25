const $aSlider = $("#aSlider");

$aSlider.slick({
    centerMode: true,
    centerPadding:24,
    slidesToShow: 4,
    focusOnSelect: true,
    pauseOnHover: true,
    autoplay:true,
    autoplaySpeed: 1000,
    speed: 800,
    arrows: true,
    prevArrow: $(".awards .slideArea .prevArrow"),
    nextArrow: $(".awards .slideArea .nextArrow"),
});