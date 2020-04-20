$(function() {
    /** 가입폼의 submit 이벤트 */
    $("#login_form").submit(function(e) {
        // 기본동작 수행 방식
        e.preventDefault();
        /** 아이디 검사 */
        if (!regex.value('#user_id', '아이디를 입력하세요.')) { return false; }
        /** 비밀번호 검사 */
        if (!regex.value('#user_pw', '비밀번호를 입력하세요.')) { return false; }
        alert("로그인 되었습니다.");
    });
});

function goback() {
    window.history.back();
}