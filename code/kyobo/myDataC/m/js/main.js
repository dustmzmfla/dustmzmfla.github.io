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

        if (top > 250) {
            $('.title03').addClass('up');
        }

        if (top > 350) {
            $('.title04').addClass('up');
        }

        if (top > 600) {
            $('.illu02').addClass('up');
        }

        if (top > 1200) {
            $('.title05').addClass('up');
        }

        if (top > 1400) {
            $('.title06').addClass('up');
        }

        if (top > 1500) {
            $('.title07').addClass('up');
        }

        if (top > 1600) {
            $('.title08').addClass('up');
        }

        if (top > 1700) {
            $('.btn').addClass('up');
        }

    })
})