$(document).ready(function(){

  setInterval(function(){
      if ($('.slide01').hasClass('swiper-slide-active') === true){
        $('.bg01').addClass('show');
        $('.title01').addClass('show_left');
        $('.slide01 .peach_togo').addClass('show2');
      }else {
        setTimeout(function () {
          $('.bg01').removeClass('show');
          $('.title01').removeClass('show_left');
          $('.slide01 .peach_togo').removeClass('show2');
      }, 300);
      }
    }, 100);
    
    setInterval(function(){
      if ($('.slide02').hasClass('swiper-slide-active')){
        $('.bg02').addClass('show');
        $('.title02').addClass('show_up');
        $('.slide02 .peach_togo').addClass('show2');
      }else {
        setTimeout(function () {
          $('.bg02').removeClass('show');
          $('.title02').removeClass('show_up');
          $('.slide02 .peach_togo').removeClass('show2');
      }, 300);
      }
    }, 100);

    setInterval(function(){
      if ($('.slide03').hasClass('swiper-slide-active') === true){
        $('.bg03').addClass('show');
        $('.title03').addClass('show_left');
        $('.slide03 .peach_togo').addClass('show2');
      }else {
        setTimeout(function () {
          $('.bg03').removeClass('show');
          $('.title03').removeClass('show_left');
          $('.slide03 .peach_togo').removeClass('show2');
      }, 300);
      }
    }, 100);

    setInterval(function(){
      if ($('.slide04').hasClass('swiper-slide-active')){
        $('.bg04').addClass('show');
        $('.title04').addClass('show_right');
        $('.slide04 .peach_togo').addClass('show2');
      }else {
        setTimeout(function () {
          $('.bg04').removeClass('show');
          $('.title04').removeClass('show_right');
          $('.slide04 .peach_togo').removeClass('show2');
      }, 300);
      }
    }, 100);

    setInterval(function(){
      if ($('.slide05').hasClass('swiper-slide-active') === true){
        $('.bg05').addClass('show');
        $('.title05').addClass('show_right');
        $('.slide05 .peach_togo').addClass('show2');
      }else {
        setTimeout(function () {
          $('.bg05').removeClass('show');
          $('.title05').removeClass('show_right');
          $('.slide05 .peach_togo').removeClass('show2');
      }, 300);
      }
    }, 100);

    setInterval(function(){
      if ($('.slide06').hasClass('swiper-slide-active') === true){
        $('.bg06').addClass('show');
        $('.title06').addClass('show_right');
        $('.slide06 .peach_togo').addClass('show2');
      }else {
        setTimeout(function () {
          $('.bg06').removeClass('show');
          $('.title06').removeClass('show_right');
          $('.slide06 .peach_togo').removeClass('show2');
      }, 300);
      }
    }, 100);

    setInterval(function(){
      if ($('.slide07').hasClass('swiper-slide-active') === true){
        $('.bg07').addClass('show');
        $('.title07').addClass('show_left');
        $('.slide07 .peach_togo').addClass('show2');
      }else {
        setTimeout(function () {
          $('.bg07').removeClass('show');
          $('.title07').removeClass('show_left');
          $('.slide07 .peach_togo').removeClass('show2');
      }, 300);
      }
    }, 100);

    setInterval(function(){
      if ($('.slide08').hasClass('swiper-slide-active') === true){
        $('.bg08').addClass('show');
        $('.title08').addClass('show_right');
        $('.slide08 .peach_togo').addClass('show2');
      }else {
        setTimeout(function () {
          $('.bg08').removeClass('show');
          $('.title08').removeClass('show_right');
          $('.slide08 .peach_togo').removeClass('show2');
      }, 300);
      }
    }, 100);

    setInterval(function(){
      if ($('.slide09').hasClass('swiper-slide-active') === true){
        $('.bg09').addClass('show');
        $('.title09').addClass('show_right');
        $('.slide09 .peach_togo').addClass('show2');
      }else {
        setTimeout(function () {
          $('.bg09').removeClass('show');
          $('.title09').removeClass('show_right');
          $('.slide09 .peach_togo').removeClass('show2');
      }, 300);
      }
    }, 100);

    setInterval(function(){
      if ($('.slide10').hasClass('swiper-slide-active') === true){
        $('.bg10').addClass('show');
        $('.title10').addClass('show_right');
        $('.slide10 .peach_togo').addClass('show2');
      }else {
        setTimeout(function () {
          $('.bg10').removeClass('show');
          $('.title10').removeClass('show_right');
          $('.slide10 .peach_togo').removeClass('show2');
      }, 300);
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
      }, 300);
      }
    }, 100);


})