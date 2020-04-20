$(() => {
    // 플립효과 적용 --> 클릭시 동작한다.
    $("#turn_card").flip({
        trigger: "hover",
    front: $(".front"), // 전면용 박스의 jQuery 객체
    back: $(".back") // 후면용 박스의 jQuery 객체
    });
});