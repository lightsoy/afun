
document.cookie = "safeCookie1=foo; SameSite=Lax";
document.cookie = "safeCookie2=foo";
document.cookie = "crossCookie=bar; SameSite=None; Secure";


let $win = $(window);
let $winW = $win.innerWidth();
let $winH = $win.innerHeight();
let scrollTop = 0;
const $body = $("body");
const $header = $(".header");
const $bread = $(".breadCrumbs");

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

//followCursor
mouseMoveEvent();
function mouseMoveEvent() {
    const $cursor = $(".followCursor");
    const mousePos = {
        x: 0,
        y: 0,
    }

    $win.on("mousemove", function (e){
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;

        $cursor.css({
           left: mousePos.x,
           top: mousePos.y,
        });
    });

}

$(window).on("resize", function() {
    $winW = $win.innerWidth();
    $winH = $win.innerHeight();
    scrollTop = $(window).scrollTop();

    scrollHeaderEvent();
    scrollEvent();
});



const $modeBtn = $header.find(".modeBtn");

// light-mode toggle
$modeBtn.on("click", function () {
    $modeBtn.toggleClass("light-mode");

    if ($modeBtn.hasClass("light-mode")) {

        const imgSrc = $(this).find("img").attr("src").replace(".png", "_light.png");

        $(this).find("img").attr("src", imgSrc);
        $body.addClass("light-mode");

        // // a태그 새로고침 방지
        // $('a').click(function(e) {
        //     e.preventDefault();
        // });

    } else {
        const imgSrc = $(this).find("img").attr("src").replace("_light.png", ".png");

        $(this).find("img").attr("src", imgSrc);
        $body.removeClass("light-mode");

    }
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
        $header.addClass("on");
        $bread.addClass("on");
    } else {
        $header.removeClass("on");
        $bread.removeClass("on");
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


// footer sns icon hover
const $snsLinkImg = $(".snsLink .imgWrap");
$snsLinkImg.on("mouseenter", function () {
    const imgSrc = $(this).find("img").attr("src").replace(".png", "_hover.png");

    $(this).find("img").attr("src", imgSrc);

}).on("mouseleave", function () {
    const imgSrc = $(this).find("img").attr("src").replace("_hover.png", ".png");

    $(this).find("img").attr("src", imgSrc);
});
