$(document).ready(function(){
    setInterval(function(){
        if ($('.slide01').hasClass('swiper-slide-active') === true){
          $('.title01').addClass('show_left');
        }else {
          setTimeout(function () {
            $('.title01').removeClass('show_left');
        }, 500);
        }
      }, 100);
      
      setInterval(function(){
        if ($('.slide02').hasClass('swiper-slide-active')){
          $('.title02').addClass('show_right');
        }else {
          setTimeout(function () {
            $('.title02').removeClass('show_right');
        }, 500);
        }
      }, 100);

      setInterval(function(){
        if ($('.slide03').hasClass('swiper-slide-active') === true){
          $('.title03').addClass('show_left');
        }else {
          setTimeout(function () {
            $('.title03').removeClass('show_left');
        }, 500);
        }
      }, 100);

      setInterval(function(){
        if ($('.slide04').hasClass('swiper-slide-active')){
          $('.title04').addClass('show_right');
        }else {
          setTimeout(function () {
            $('.title04').removeClass('show_right');
        }, 500);
        }
      }, 100);

      setInterval(function(){
        if ($('.slide05').hasClass('swiper-slide-active') === true){
          $('.title05').addClass('show_right');
        }else {
          setTimeout(function () {
            $('.title05').removeClass('show_right');
        }, 500);
        }
      }, 100);

      setInterval(function(){
        if ($('.slide06').hasClass('swiper-slide-active') === true){
          $('.title06').addClass('show_right');
        }else {
          setTimeout(function () {
            $('.title06').removeClass('show_right');
        }, 500);
        }
      }, 100);

      setInterval(function(){
        if ($('.slide07').hasClass('swiper-slide-active') === true){
          $('.title07').addClass('show_left');
        }else {
          setTimeout(function () {
            $('.title07').removeClass('show_left');
        }, 500);
        }
      }, 100);

      setInterval(function(){
        if ($('.slide08').hasClass('swiper-slide-active') === true){
          $('.title08').addClass('show_right');
        }else {
          setTimeout(function () {
            $('.title08').removeClass('show_right');
        }, 500);
        }
      }, 100);

      setInterval(function(){
        if ($('.slide09').hasClass('swiper-slide-active') === true){
          $('.title09').addClass('show_right');
        }else {
          setTimeout(function () {
            $('.title09').removeClass('show_right');
        }, 500);
        }
      }, 100);

      setInterval(function(){
        if ($('.slide10').hasClass('swiper-slide-active') === true){
          $('.title10').addClass('show_right');
        }else {
          setTimeout(function () {
            $('.title10').removeClass('show_right');
        }, 500);
        }
      }, 100);

      setInterval(function(){
        if ($('.slide11').hasClass('swiper-slide-active') === true){
          setTimeout(function () {
              $('.title11').addClass('show_up');
          }, 300);
          setTimeout(function () {
              $('.title12').addClass('show_up');
          }, 700);
          setTimeout(function () {
              $('.title13').addClass('show_up');
          }, 1100);
          setTimeout(function () {
            $('.insure').addClass('show_up');
        }, 1500);
        }else {
          setTimeout(function () {
            $('.title11').removeClass('show_up');
            $('.title12').removeClass('show_up');
            $('.title13').removeClass('show_up');
            $('.insure').removeClass('show_up');
        }, 500);
        }
      }, 100);
})