$(() => {
    $("#top_bar").headroom({
        tolerance: 10, // 스크롤 이동 거리(px) -> 이만큼의 스크롤이 이동되어야 동작함
        offset: 350, // 타이틀바 유효 위치(px) -> 세트로 350px까지는 정상 표시됨.
        classes: { // 타이틀바에 적용할 CSS 클래스
            initial: "animated", // 초기화 클래스 (무조건 적용됨)
            pinned: "slideInDown", // 스크롤이 위로 이동할 때 적용될 클래스
            unpinned: "slideOutUp", // 스크롤이 아래로 이돌할 때 적용될 클래스
            top: "headroom--top", // 타이틀바가 화면에 표시중인 상태에서 적용될 클래스
            notTop: "headroom--not-top" // 타이틀바가 위로 사라진 상태에서 적용될 클래스
        }
    });
});