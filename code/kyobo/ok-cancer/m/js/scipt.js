$(document).ready(function(){

  var name1 = document.getElementById('section_name');
  var birth1 = document.getElementById('section_birth');
  var phone1 = document.getElementById('section_phone');
  var name2 = document.getElementById('popup_name');
  var birth2 = document.getElementById('popup_birth');
  var phone2 = document.getElementById('popup_phone');
  var btm_chk01 = document.getElementById('btm_pop_agree01');
  var btm_chk02 = document.getElementById('btm_pop_agree02');

      $('.section_btn01').click(function(){
        if (name1.value == '') {
          alert('이름을 입력하세요');
          return false;
        }else if(birth1.value == ''){
          alert('생년월일을 입력하세요');
          return false;
        }else if(birth1.value.length < 8){
          alert('생년월일을 확인하세요');
          return false;
        }else if(phone1.value == ''){
          alert('휴대폰번호를 입력하세요');
          return false;
        }else if(phone1.value.length < 11){
          alert('휴대폰번호를 확인하세요');
          return false;
        }
        $('.popup01').addClass('for_mainBtn01');
        $('.popup01').show();
      });

      $('.section_btn02').click(function(){
        if (name1.value == '') {
          alert('이름을 입력하세요');
          return false;
        }else if(birth1.value == ''){
          alert('생년월일을 입력하세요');
          return false;
        }else if(birth1.value.length < 8){
          alert('생년월일을 확인하세요');
          return false;
        }else if(phone1.value == ''){
          alert('휴대폰번호를 입력하세요');
          return false;
        }else if(phone1.value.length < 11){
          alert('휴대폰번호를 확인하세요');
          return false;
        }
        $('.popup01').addClass('for_mainBtn02');
        $('.popup01').show();
        
      });

      $('.menu').click(function(){
        $('.header_popup_line').show();
      });

      $('.header_popup_line .close').click(function(){
        $('.header_popup_line').hide();
      })

      $(window).scroll(function(){
        var top = $(window).scrollTop();
      
        if (top > 1600) {
          $('.bottom').css('bottom', '-10px');
        }else {
          $('.bottom').css('bottom', '-200px');
        }

        if (top > 1200) {
          $('.coffee_coupon').css('opacity', '1');
        }else {
          $('.coffee_coupon').css('opacity', '0');
        }

      });

      $('.bottom01, .bottom02').click(function(){
        $('.bottom_popup_line').removeClass('hide');
        $('.bottom_popup_line').addClass('on');
        $('.bottom_popup_line .popup').show();
      })

      $('.bottom_popup .close').click(function(){
        $('.bottom_popup_line').removeClass('on');
        $('.bottom_popup_line').addClass('hide');
      })

      $('.real_bottom01').click(function(){
        if (name2.value == '') {
        alert('이름을 입력하세요');
        return false;
        }else if(birth2.value == ''){
            alert('생년월일을 입력하세요');
            return false;
        }else if(birth2.value.length < 8){
            alert('생년월일을 확인하세요');
            return false;
        }else if(phone2.value == ''){
            alert('휴대폰번호를 입력하세요');
            return false;
        }else if(phone2.value.length < 11){
            alert('휴대폰번호를 확인하세요');
            return false;
        }
        $('.popup').hide();
        $('.popup01').addClass('btmBtn01');
        $('.popup01').show();

        });
        $('.real_bottom02').click(function(){
          if (name2.value == '') {
          alert('이름을 입력하세요');
          return false;
          }else if(birth2.value == ''){
              alert('생년월일을 입력하세요');
              return false;
          }else if(birth2.value.length < 8){
              alert('생년월일을 확인하세요');
              return false;
          }else if(phone2.value == ''){
              alert('휴대폰번호를 입력하세요');
              return false;
          }else if(phone2.value.length < 11){
              alert('휴대폰번호를 확인하세요');
              return false;
          }
          $('.popup').hide();
          $('.popup01').addClass('btmBtn02');
          $('.popup01').show();
  
          });
    
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


        $('.popup01_close').click(function(){
          if (btm_chk01.checked == true && btm_chk02.checked == true ){
            if( $('.popup01').hasClass('for_mainBtn01') ) {
              $('.popup01').hide();
              $('.popup02').show();
            } else if( $('.popup01').hasClass('btmBtn01') ){
              $('.popup01').hide();
              $('.popup02').show();
            } else if( $('.popup01').hasClass('for_mainBtn02') ){
              $('.popup01').hide();
              $('.popup03').show();
            } else if( $('.popup01').hasClass('btmBtn02') ){
              $('.popup01').hide();
              $('.popup03').show();
            }
          }else {
            $('.popup01').hide();
            $('.popup01').removeClass('for_mainBtn01');
            $('.popup01').removeClass('btmBtn01');
            $('.popup01').removeClass('for_mainBtn02');
            $('.popup01').removeClass('btmBtn02');
          }
          
        });

        $('.coffee_close').click(function(){
          $('.coffee_coupon').hide();
        })

        $('.all_chk').click(function(){
          if( $('.popup01').hasClass('for_mainBtn01') ) {
            $('.popup01').hide();
            $('.popup02').show();
          } else if( $('.popup01').hasClass('btmBtn01') ){
            $('.popup01').hide();
            $('.popup02').show();
          } else if( $('.popup01').hasClass('for_mainBtn02') ){
            $('.popup01').hide();
            $('.popup03').show();
          } else if( $('.popup01').hasClass('btmBtn02') ){
            $('.popup01').hide();
            $('.popup03').show();
          }
        })

        $('.complete_header button').click(function(){
          $('.popup02').hide();
          $('.popup03').hide();
          location.reload();
        })
        
        $('label[for=btm_pop_agree01]').click(function(){
          if ( !btm_chk02.checked ) {
            $('.popup_nav li:first-child').removeClass('nav_on');
            $('.popup_nav li:last-child').addClass('nav_on');
            $('.radio_line01').removeClass('active');
            $('.radio_line02').addClass('active');
          }else if ( btm_chk02.checked ) {
            btm_chk02.checked = true;
            $('.popup01').hide();
            if ( $('.popup01').hasClass('for_mainBtn01') == true ) {
              $('.popup02').show();
            }else if ( $('.popup01').hasClass('for_mainBtn02') == true ){
              $('.popup03').show();
            }
          }
          
        })
    
        $('label[for=btm_pop_agree02]').click(function(){
          if ( !btm_chk01.checked ) {
            $('.popup_nav li:last-child').removeClass('nav_on');
            $('.popup_nav li:first-child').addClass('nav_on');
            $('.radio_line02').removeClass('active');
            $('.radio_line01').addClass('active');
          }else if ( btm_chk01.checked ) {
            btm_chk02.checked = true;
            $('.popup01').hide();
            if ( $('.popup01').hasClass('for_mainBtn01') == true || $('.popup01').hasClass('btmBtn01') ) {
              $('.popup02').show();
            }else if ( $('.popup01').hasClass('for_mainBtn02') == true || $('.popup01').hasClass('btmBtn02') ){
              $('.popup03').show();
            }
          }
          
        })
});