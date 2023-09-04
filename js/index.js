$(document).ready(function(){

    history.scrollRestoration = "manual"

    function shadow() {
        var color_change = '#' + Math.floor(Math.random() * 16777216).toString(16);
        var imgBox = document.querySelector('.shadow');
        imgBox.style.backgroundColor = color_change;
      }
      shadow();
      setInterval(shadow, 2000);

      $('.contact').mouseover(function(){
        $(this).addClass('hover');
      });
      $('.contact').mouseout(function(){
        $(this).removeClass('hover');
      });

    $('.sec02 nav ul li:first-child').click(function(){
        $('.sec02 nav ul').removeClass('nav-second');
        $('.sec02 nav ul').addClass('nav-first');
    });
    $('.sec02 nav ul li:last-child').click(function(){
        $('.sec02 nav ul').addClass('nav-second');
        $('.sec02 nav ul').removeClass('nav-first');
    });

    $('.dark').click(function(){
        $(this).hide();
        $('.light').show();
        $('.wrapper').addClass('dark-mod');
        $('.wrapper').removeClass('light-mod');
    });
    $('.light').click(function(){
        $(this).hide();
        $('.dark').show();
        $('.wrapper').removeClass('dark-mod');
        $('.wrapper').addClass('light-mod');
    });

    let samsung = $('.samsung').offset().top;
    let kyobo = $('.kyobo').offset().top;
    let meritz = $('.meritz').offset().top;
    let aig = $('.aig').offset().top;
    let hana = $('.hana').offset().top;
    let kolon = $('.kolon').offset().top;
    let aia = $('.aia').offset().top;
    let lg = $('.lg').offset().top;
    let thek = $('.thek').offset().top;
    let teddyx = $('.teddyx').offset().top;
    let addward = $('.addward').offset().top;
    let mstm = $('.mstm').offset().top;
    let taxin = $('.taxin').offset().top;
    let todes = $('.todes').offset().top;
    let utomo = $('.utomo').offset().top;
    $(window).scroll(function(){
        let scrollY = $(window).scrollTop();
        if ( scrollY +300 >= samsung ) {
            $('.pop-box').css('bottom', '30px');
        }else {
            $('.pop-box').css('bottom', '-1000px');
        };

        if ( scrollY +300 >= samsung && scrollY +300 < kyobo ) {
            $('.wing li').removeClass('current');
            $('.wing-nav01').addClass('current');
        }else if ( scrollY +300 >= kyobo && scrollY +300 < meritz ) {
            $('.wing li').removeClass('current');
            $('.wing-nav02').addClass('current');
        }else if ( scrollY +300 >= meritz && scrollY +300 < aig ) {
            $('.wing li').removeClass('current');
            $('.wing-nav03').addClass('current');
        }else if ( scrollY +300 >= aig && scrollY +300 < hana ) {
            $('.wing li').removeClass('current');
            $('.wing-nav04').addClass('current');
        }else if ( scrollY +300 >= hana && scrollY  +300 < kolon ) {
            $('.wing li').removeClass('current');
            $('.wing-nav05').addClass('current');
        }else if ( scrollY +300 >= kolon && scrollY +300 < thek ) {
            $('.wing li').removeClass('current');
            $('.wing-nav06').addClass('current');
        }else if ( scrollY +300 >= thek && scrollY +300 < aia ) {
            $('.wing li').removeClass('current');
            $('.wing-nav07').addClass('current');
        }else if ( scrollY +300 >= aia && scrollY +300 < lg ) {
            $('.wing li').removeClass('current');
            $('.wing-nav08').addClass('current');
        }else if ( scrollY +300 >= lg && scrollY +300 < teddyx ) {
            $('.wing li').removeClass('current');
            $('.wing-nav09').addClass('current');
        }else if ( scrollY +300 >= teddyx && scrollY +300 < addward ) {
            $('.wing li').removeClass('current');
            $('.wing-nav10').addClass('current');
        }else if ( scrollY +300 >= addward && scrollY +300 < mstm ) {
            $('.wing li').removeClass('current');
            $('.wing-nav11').addClass('current');
        }else if ( scrollY +300 >= mstm && scrollY +300 < taxin ) {
            $('.wing li').removeClass('current');
            $('.wing-nav12').addClass('current');
        }else if ( scrollY +300 >= taxin && scrollY +300 < todes ) {
            $('.wing li').removeClass('current');
            $('.wing-nav13').addClass('current');
        }else if ( scrollY +300 >= todes && scrollY +300 < utomo ) {
            $('.wing li').removeClass('current');
            $('.wing-nav14').addClass('current');
        }
        else if ( scrollY +300 >= utomo ) {
            $('.wing li').removeClass('current');
            $('.wing-nav15').addClass('current');
        }else {
            $('.wing li').removeClass('current');
        }
    });

    $('.top-btn').click(function(){
        $('html').animate({scrollTop: 0}, 300)
    });

    $('.close-btn').click(function(){
        $('.pop-box').css('bottom', '-1000px');
        $('.pop-box').css('opacity', '0');
        setTimeout(function(){
            $('.pop-box').remove();
        }, 100);
    });

    $('.wing li').click(function(){
        let move = $(this).attr('data-list');
        let location = $('.' + move).offset().top;
        $('html').animate({scrollTop: location - 80}, 300);
    });



    // up이벤트
    $('.my-img').addClass('up');
    setTimeout(function(){ $('.about-me').addClass('up'); }, 150);
    setTimeout(function(){ $('.profile ul li:nth-child(1)').addClass('up'); }, 300);
    setTimeout(function(){ $('.profile ul li:nth-child(2)').addClass('up'); }, 450);
    setTimeout(function(){ $('.profile ul li:nth-child(3)').addClass('up'); }, 600);
    setTimeout(function(){ $('.profile ul li:nth-child(4)').addClass('up'); }, 750);
    setTimeout(function(){ $('.contact').addClass('up'); }, 900);
    setTimeout(function(){ $('.sec02 nav').addClass('draw');  }, 1050);
    setTimeout(function(){ $('.nav-first').css('opacity', '1'); }, 1650);
    setTimeout(function(){ $('.sec02 .inner').addClass('up'); }, 1800);


    // 안내 메시지
    const eachTemplate = `
        <div class="work">
            <div class="dev">PC | MO</div>
            <div class="notice">
                <p>
                    PC와 모바일 버전이 따로 작업되어 있습니다<br/>
                    바로가기 버튼은 PC환경에선 PC로,<br/>
                    모바일 환경에선 모바일 페이지로 연결됩니다
                </p>
            </div>
        </div>
    `;
    const bothTemplate = `
        <div class="work">
            <div class="dev">반응형</div>
            <div class="notice">
                <p>
                    반응형으로 작업된 페이지입니다<br/>
                    한 페이지 내에서 브라우저 크기를 조정하여,<br/>
                    PC와 모바일 화면을 다 확인할 수 있습니다
                </p>
            </div>
        </div>
    `;

    const mobileTemplate = `
        <div class="work">
            <div class="dev">MOBILE</div>
            <div class="notice">
                <p>
                    해당 페이지는 모바일 전용으로 작업되어,<br/>
                    모바일 환경에서 보시는 걸 추천드립니다
                </p>
            </div>
        </div>
    `;
    $('.each').append(eachTemplate);
    $('.both').append(bothTemplate);
    $('.mobileOnly').append(mobileTemplate);

    $('.each .work').mouseover(function(){
        $(this).find('.notice').addClass('hover');
    });
    $('.both .work').mouseover(function(){
        $(this).find('.notice').addClass('hover');
    });
    $('.mobileOnly .work').mouseover(function(){
        $(this).find('.notice').addClass('hover');
    });
    $('.each .work').mouseout(function(){
        $(this).find('.notice').removeClass('hover');
    });
    $('.both .work').mouseout(function(){
        $(this).find('.notice').removeClass('hover');
    });
    $('.mobileOnly .work').mouseout(function(){
        $(this).find('.notice').removeClass('hover');
    });
    
    $('.popup-close').click(function(){
        $('html').css('overflow', 'auto');
        $('.popup-background').removeClass('fade');
        $('.popup-wrapper').removeClass('up');
        $('.popup').removeClass('show');
    });
    $('.popup-background').click(function(){
        $('.popup').removeClass('show');
        $('html').css('overflow', 'auto'); 
        $('.popup-background').removeClass('fade');
        $('.popup-wrapper').removeClass('up');
    });

    $('.datail-btn').click(function(){
        let tabData = $(this).attr('data-tab');
        $('#' + tabData).addClass('show');
        $('html').css('overflow', 'hidden'); 
        setTimeout(function(){
            $('.popup-background').addClass('fade');
        },100)
        setTimeout(function(){
            $('.popup-wrapper').addClass('up');
        },200)
    });
    $('.grid-img').click(function(){
        let tabData = $(this).attr('data-tab');
        $('#' + tabData).addClass('show');
        $('html').css('overflow', 'hidden'); 
        setTimeout(function(){
            $('.popup-background').addClass('fade');
        },100)
        setTimeout(function(){
            $('.popup-wrapper').addClass('up');
        },200)
    });

    
});