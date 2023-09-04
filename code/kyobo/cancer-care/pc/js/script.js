$(document).ready(function(){

  $(window).scrollTop(0);

  var name = document.getElementById('wing-name');
  var birth = document.getElementById('wing-birth');
  var phone = document.getElementById('wing-phone');
  var chk01 = document.getElementById('btm_pop_agree01');
  var chk02 = document.getElementById('btm_pop_agree02');

  $('.insu_title02').click(function(){
    alert('준비중입니다');
  })

    $('.wing-btn01').click(function(){
        
    if (name.value == '') {
      alert('이름을 입력하세요');
      return false;
    }else if(birth.value == ''){
        alert('생년월일을 입력하세요');
        return false;
    }else if(birth.value.length < 8){
        alert('생년월일을 확인하세요');
        return false;
    }else if(phone.value == ''){
        alert('휴대폰번호를 입력하세요');
        return false;
    }else if(phone.value.length < 11){
        alert('휴대폰번호를 확인하세요');
        return false;
    }

    $('.popup01').addClass('pop01');
    $('.popup01').show();

    });

    $('.wing-btn02').click(function(){
        
      if (name.value == '') {
        alert('이름을 입력하세요');
        return false;
      }else if(birth.value == ''){
          alert('생년월일을 입력하세요');
          return false;
      }else if(birth.value.length < 8){
          alert('생년월일을 확인하세요');
          return false;
      }else if(phone.value == ''){
          alert('휴대폰번호를 입력하세요');
          return false;
      }else if(phone.value.length < 11){
          alert('휴대폰번호를 확인하세요');
          return false;
      }
  
      $('.popup01').addClass('pop02');
      $('.popup01').show();
  
      });

    $('.popup_close').click(function(){
      if ( chk01.checked && chk02.checked ) {
        if ( $('.popup01').hasClass('pop01') == true ) {
          $('.popup02').show();
        }else if ( $('.popup01').hasClass('pop02') == true ){
          $('.popup03').show();
        }
      } else {
        $('.popup').hide();
      }
    })
    $('.popup_close2').click(function(){
      $('.popup').hide();
      location.reload();
    })

    $('.all_chk').click(function(){
      chk01.checked = true;
      chk02.checked = true;
      $('.popup01').hide();
      if ( $('.popup01').hasClass('pop01') == true ) {
        $('.popup02').show();
      }else if ( $('.popup01').hasClass('pop02') == true ){
        $('.popup03').show();
      }
    })

    $('label[for="wing_agree"]').click(function(){
      $('.popup01').show();
    })

    $('.popup_nav li:first-child').click(function(){
      $('.popup_nav li').removeClass('nav_on');
      $('.popup_contents li').removeClass('active');
      $('.radio_line').removeClass('active');
      $(this).addClass('nav_on');
      $('.popup_contents01').addClass('active');
      $('.radio_line01').addClass('active');
    })

    $('.popup_nav li:last-child').click(function(){
      $('.popup_nav li').removeClass('nav_on');
      $('.popup_contents li').removeClass('active');
      $('.radio_line').removeClass('active');
      $(this).addClass('nav_on');
      $('.popup_contents02').addClass('active');
      $('.radio_line02').addClass('active');
    })

    $(window).scroll(function(){
      var top = $(window).scrollTop();

      if (top > 800) {
        $('.up_btn').css('opacity', 1);
      }else {
        $('.up_btn').css('opacity', 0);
      }
    });

    $('.coffee_close').click(function(){
      $('.coffee_coupon').hide();
    })

    $('.up_btn').click(function(){
      $('html').animate({scrollTop: '0'}, 800);
    });

    $('label[for=btm_pop_agree01]').click(function(){
      if ( !chk02.checked ) {
        $('.popup_nav li:first-child').removeClass('nav_on');
        $('.popup_nav li:last-child').addClass('nav_on');
        $('.radio_line01').removeClass('active');
        $('.radio_line02').addClass('active');
      }else if ( chk02.checked ) {
        chk01.checked = true;
        $('.popup01').hide();
        if ( $('.popup01').hasClass('pop01') == true ) {
          $('.popup02').show();
        }else if ( $('.popup01').hasClass('pop02') == true ){
          $('.popup03').show();
        }
      }
      
    })

    $('label[for=btm_pop_agree02]').click(function(){
      if ( !chk01.checked ) {
        $('.popup_nav li:last-child').removeClass('nav_on');
        $('.popup_nav li:first-child').addClass('nav_on');
        $('.radio_line02').removeClass('active');
        $('.radio_line01').addClass('active');
      }else if ( chk01.checked ) {
        chk02.checked = true;
        $('.popup01').hide();
        if ( $('.popup01').hasClass('pop01') == true ) {
          $('.popup02').show();
        }else if ( $('.popup01').hasClass('pop02') == true ){
          $('.popup03').show();
        }
      }
      
    })

});