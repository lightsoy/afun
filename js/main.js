const $ourWorks = $(".ourWorks");
const $wSlider  = $("#wSlider");
const $accorLi = $(".ourTeam .accordion > li");


// visual video controlBtn ani
const $ctrlBtn = $(".visual .ctrlBtn");
const $video = $(".visual .videoFrame video").get(0);

$ctrlBtn.find(".sound").on("click", function() {
   if ($video.muted === false) {
       $video.muted = true;
       $(this).find("img").attr("src", "images/button/img_controler_sound.png");
   } else {
       $video.muted = false;
       $(this).find("img").attr("src", "images/button/img_controler_mute.png");
   }
});

$ctrlBtn.find(".play").on("click", function() {
    if ($video.paused) {
        $video.play();
        $(this).find("img").attr("src", "images/button/img_controler_pause.png");
    } else {
        $video.pause();
        $(this).find("img").attr("src", "images/button/img_controler_play.png");
    }
});



// ourWorks slide
$wSlider.on("init", function (event, slick) {
    // $ourWorks.find(".wTextWrap").eq(slick.currentSlide).addClass("active");
});

$wSlider.slick({
    centerMode:false,
    variableWidth: true,
    initialSlide: 0,

    arrows: true,
    prevArrow: $(".ourWorks .slideArea .prevArrow"),
    nextArrow: $(".ourWorks .slideArea .nextArrow"),

    dots:true,
    appendDots:$ourWorks.find(".wDotsWrap"),
    dotsClass: "customDots",
});

$ourWorks.find("#wSlider").on("beforeChange", function (event, slick, current, next) {
    $ourWorks.find(".textWrap").css({
        transition: "0s",
        opacity: 0,
    });
    $ourWorks.find(".wTextWrap").eq(next).addClass("active");
    $ourWorks.find(".wTextWrap").eq(next).siblings().removeClass("active");
});

// $ourWorks.find("#wSlider").on("beforeChange", function (event, slick, current, next) {
//     $ourWorks.find(".wTextWrap .text").eq(next).addClass("active");
//     $ourWorks.find(".wTextWrap .text").eq(next).siblings().removeClass("active");
// });



//business hover dimmed
const $bConImg = $(".business .imgArea .bContents .bConImgWrap");

$bConImg.on("mouseenter", function () {
    $(this).toggleClass("on");
}).on("mouseleave", function () {
    $(this).removeClass("on");
});

// history slide
$hSlider.slick({
    variableWidth: true,
    focusOnSelect: true,
    arrows: false,

    // centerMode: true,
    // slidesToShow: 5,
    // infinite:false,
});

// 스크롤..
// $('.ourHistory').on("wheel", function(e) {
//     e.preventDefault();
//
//     if (e.originalEvent.deltaY < 0) {
//         $(this).slick('slickPrev');
//     } else {
//         $(this).slick('slickNext');
//     }
// });


//  our team accordion
$accorLi.find(".team").on("click", function () {
    const $teamLi = $(this).siblings("ul");
    const $teamBtn = $(this).find(".accordionBtn");
    const $teamTit = $(this).find("h3");

    $teamLi.slideToggle();
    $teamLi.parent().siblings().find(".teamList").slideUp();

    $teamBtn.toggleClass("on");
    $teamBtn.parent().closest("li").siblings().find(".accordionBtn").removeClass("on");

    $teamTit.toggleClass("on");
    $teamTit.parent().closest("li").siblings().find("h3").removeClass("on");
});




