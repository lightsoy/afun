let $win = $(window);
let $winW = $win.innerWidth();
let $winH = $win.innerHeight();
let scrollTop = 0;
const $header = $(".header");

const $footer = $(".footer");
const $quickTop = $("#quickTop");

// sub_about 사용
const $hSlider  = $("#hSlider");


// header

// 윈도우에서 스크롤을 이동하면 발생되는 이벤트
$(window).on("scroll", function() {
    scrollTop = $(this).scrollTop();

    scrollHeaderEvent();
    scrollEvent();

});

$(window).on("resize", function() {
    $winW = $win.innerWidth();
    $winH = $win.innerHeight();
    scrollTop = $(window).scrollTop();

    scrollHeaderEvent();
    scrollEvent();
});

// MOVE_TOP_BTN ani
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('#MOVE_TOP_BTN').fadeIn(300);
        } else {
            $('#MOVE_TOP_BTN').fadeOut(300);
        }
    });
    $quickTop.click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});

// 채팅버튼 hover
var delay=1000, setTimeoutConst;
$('.chatDiv').hover(function() {
    $('.quickMsg').delay(65).animate( {right:'270px'}, 420);
    $('.quickBtnTextWrap').animate( {width:'300px', opacity:"100%"}, 500, function() {
        $('.msgText').animate({opacity:"100%"}, 150);
    });
}, function() {
    setTimeoutConst = setTimeout(function() {
        $('.msgText').animate({opacity:"0"}, 1);
        $('.quickMsg').animate( {right:'20px'}, 350);
        $('.quickBtnTextWrap').animate( {width:'0', opacity:"0"}, 400);
    }, delay);
});

function scrollHeaderEvent() {
    if (scrollTop > 1) {
        $(".header").addClass("on");
    } else {
        $(".header").removeClass("on");
    }
}


// section text  scroll ani
scrollEvent();
function scrollEvent(){
    const aniItem = $("section .ani");
    const $titWrap = $("section .titWrap");

    for (let i = 0; i < $titWrap.length; i++) {
        if (scrollTop + $winH > $titWrap.eq(i).offset().top + 200) {
            $titWrap.eq(i).addClass("aniTop");
        }
    }

    for (let i=0; i < aniItem.length; i++){
        if (scrollTop + $winH > aniItem.eq(i).offset().top + 200){
            aniItem.eq(i).addClass("on");
        }
    }
}




// footer,.. 안된다..
// $footer.find(".imgWrap").on("mouseenter", function () {
//     const $snsImg = $(this).find(".img");
//
//     $snsImg.html(`<img src="../images/button/img_sns_instargram_hover.png" alt="#">`);
// });

// footer sns icon hover
$('#sns_instagram').hover(function() {
    $('#sns_instagram img').attr("src", "images/button/img_sns_instargram_hover.png");
}, function() {
    $('#sns_instagram img').attr("src", "images/button/img_sns_instargram.png");
});

$('#sns_twitter').hover(function() {
    $('#sns_twitter img').attr("src", "images/button/img_sns_twitter_hover.png");
}, function() {
    $('#sns_twitter img').attr("src", "images/button/img_sns_twitter.png");
});

$('#sns_youtube').hover(function() {
    $('#sns_youtube img').attr("src", "images/button/img_sns_youtube_hover.png");
}, function() {
    $('#sns_youtube img').attr("src", "images/button/img_sns_youtube.png");
});

