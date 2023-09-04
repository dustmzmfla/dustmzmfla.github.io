
$(document).ready(function(){

    $('.scroll-top').click(function(){
        $('html').animate({scrollTop: 0}, 300);
    })

    $('.mo-contents .logo').click(function(){
        if( $(this).hasClass('show') == true ) {
            $('.logo').removeClass('show');
            $('.grid').slideUp();
        }else {
            $('.logo').removeClass('show');
            $('.grid').slideUp();
            $(this).addClass('show');
            $(this).siblings('.grid').slideDown();
        }
    })

    

});