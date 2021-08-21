$(function () {
    // -----ハンバーガーメニュー-----
    $("#menu-icon").click(function () {
        $(this).toggleClass("open");
        $("#global-nav").toggleClass("sp_open");
    });

    $(".global-list").click(function () {
        $("#menu-icon").toggleClass("open");
        $("#global-nav").toggleClass("sp_open");
    });
    // ------------------------------    
    
});
// -----トップ画面のスライドショー-----
function slideSwitch() {
    var $active = $('.top-image.active');

    if ($active.length == 0) $active = $('.top-image:last');

    var $next = $active.next().length ? $active.next()
        : $('.top-image:first');

    $active.addClass('last-active');

    $next.css({ opacity: 0.0 })
        .addClass('active')
        .animate({ opacity: 1.0 }, 1000, function () {
            $active.removeClass('active last-active');
        });
}

$(function () {
    setInterval("slideSwitch()", 4000);
});
// ---------------------------
// -----スクロール時にふわっと表示-----
$(function () {
    $(window).scroll(function () {
        $(".scroll-up").each(function () {
        var elemPos = $(this).offset().top; /* 要素の位置を取得 */
        var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
        var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
        if (scroll > elemPos - windowHeight) {
          /* 要素位置までスクロール出来たときに動作する */
            $(this).addClass("effect-scroll");
        }
        });
    });
    jQuery(window).scroll();
});
// ------------------------------
