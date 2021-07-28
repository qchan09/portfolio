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
    // ------ふわっと表示-----
        // $(window).on("load", function() {
        // $('').delay(600).fadeIn("slow");
        // });
    // ------------------------
    
    
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
// -------------------------------------
// $(function(){
//     load_effect();
//     $(window).scroll(function (){
//         scroll_effect();
//     });
// });

// $(function(){
//     //ふわっとロード
// function load_effect(){
//     var tt = $(window).scrollTop();
//     var hh = $(window).height();
//     $('.load-fade').each(function(){
//         var yy = $(this).offset().top;
//         if (tt > yy - hh){
//             $(this).addClass('effect');
//         }
//     });
//     $('.load-up').each(function(){
//         var yy = $(this).offset().top;
//         if (tt > yy - hh){
//             $(this).addClass('effect');
//         }
//     });
// }

// //ふわっとスクロール
// function scroll_effect(){
//     var tt = $(window).scrollTop();
//     var hh = $(window).height();
//     // $('.scroll-fade').each(function(){
//     //     var yy = $(this).offset().top+400;//効果発生開始タイミングを操作したい場合は数値を変更する
//     //     if (tt > yy - hh){
//     //         $(this).addClass('effect');
//     //     }
//     // });
//     $('.scroll-up').each(function(){
//         var yy = $(this).offset().top+400;//効果発生開始タイミングを操作したい場合は数値を変更する
//         if (tt > yy - hh){
//             $(this).addClass('effect');
//         }
//     });
// }
// });