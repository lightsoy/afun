
// history slide
$hSlider.slick({
    variableWidth: true,
    focusOnSelect: true,
    arrows: false,

    // centerMode: true,
    // slidesToShow: 5,
    // infinite:false,
});

// CI guide button click

const $colorBtn = $(".ciGuide").find(".btn.color");
const $monoBtn = $(".ciGuide").find(".btn.mono");

$colorBtn.on("click", function () {
    $(this).addClass("on");
    $(this).siblings().removeClass("on");

});
$monoBtn.on("click", function () {
    $(this).addClass("on");
    $(this).siblings().removeClass("on");

    $(this).closest(".contentArea").find(".verticalLogo").addClass("mono");
    $(this).closest(".contentArea").find(".horizontalLogo").addClass("mono");
});