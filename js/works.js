
// console.log($site.eq());

// 안된다...
siteLinkEvent();
function siteLinkEvent() {
    const $site = $(".siteMap .siteLinkWrap .site");

    $site.on("mouseenter", function () {
        // $(this).closest(".snsIcon").addClass("on");
        // $(this).closest(".snsIcon").css("opacity: 1");
        $(this).eq().find(".snsIcon").addClass("on");

    },function () {

        $(this).eq().find(".snsIcon").removeClass("on");
    });

}