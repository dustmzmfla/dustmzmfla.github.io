$(document).ready(function(){
   $('.title01').addClass('up');

    setTimeout(function(){
        $('.title02').addClass('up');
    }, 500);

    setTimeout(function(){
        $('.illu01').addClass('up');
    }, 1000);

    $(window).scroll(function(){
        var offset = 0;
        var top = $(window).scrollTop();

        if (top > 500) {
            $('.title03').addClass('up');
        }

        if (top > 600) {
            $('.title04').addClass('up');
        }

        if (top > 900) {
            $('.illu02').addClass('up');
        }

        if (top > 2200) {
            $('.title05').addClass('up');
        }

        if (top > 2400) {
            $('.title06_01').addClass('up');
            $('.title06_02').addClass('up');
        }

        if (top > 2500) {
            $('.title07_01').addClass('up');
            $('.title07_02').addClass('up');
        }

    })
})