$(document).ready(function() {
    $('.bottom').click(function() {
        $('.screen').toggleClass('active')
    })
})

function printTime() {
    // 현재 시각을 구한다.

    var days = ["일", "월", "화", "수", "목", "금", "토"];
    var mydate = new Date();
    var mm = mydate.getMonth() + 1;
    var dd = mydate.getDate();
    var i = mydate.getDay();
    var day = days[i];
    var hh = mydate.getHours();
    var mi = mydate.getMinutes();


    // 완성된 현재 시각

    var now = hh + ":" + mi + " " + mm + "월" + dd + "일" + day + "요일";



    // id속성값이 timer인 요소에게 결과를 출력한다.

    document.getElementById("time").innerHTML = now;




}

function startTimer() {
    setInterval(printTime, 1000); // printTime 함수를 1초에 한번씩 반복해서 자동 호출한다.}
}