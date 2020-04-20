$(function() {
        $("#datepicker").datepicker({
            autoHide: true, //
            format: "yyyy-mm-dd",
            language: "ko-KR", //
            weekStart: 0 //
        });
    });

    $(function() {
        /** 가입폼의 submit 이벤트 */
        $("#join_form").submit(function(e) {
            // 기본동작 수행 방식
            e.preventDefault();
            /** 아이디 검사 */
            if (!regex.value('#user_id', '아이디를 입력하세요.')) { return false; }
            if (!regex.eng_num('#user_id', '아이디는 영어와 숫자 조합만 입력 가능합니다.')) { return false;
}
if (!regex.min_length('#user_id', 4, '아이디는 최소 4자 이상 입력 가능합니다.')) { return false; }
if (!regex.max_length('#user_id', 20, '아이디는 최대 20자 까지만 입력 가능합니다.')) { return false; }
/** 비밀번호 검사 */
if (!regex.value('#user_pw', '비밀번호를 입력하세요.')) { return false; }
if (!regex.min_length('#user_pw', 4, '비밀번호는 최소 4자 이상 입력 가능합니다.')) { return false; }
if (!regex.max_length('#user_pw', 20, '비밀번호는 최대 20자 까지만 입력 가능합니다.')) { return false; }
            if (!regex.compare_to('#user_pw', '#user_pw_re', '비밀번호 확인이 잘못되었습니다.')) { return false; }
            /** 이메일 검사 */
            if (!regex.value('#email', '이메일을 입력하세요.')) { return false; }
            if (!regex.email('#email', '이메일 주소가 잘못되었습니다.')) { return false; }
            /** 성별검사 */
            if (!regex.check('input[name=gender]', '성별을 선택하세요.')) { return false; }
            /** 생년월일 검사 */
            if (!regex.value('input[name=user_birth]', '생년월일을 선택하세요.')) { return false; }
            // 처리 완료
            alert("회원가입 되었습니다.");
        });
    });

    function goback() {
        window.history.back();
    }