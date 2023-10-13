/* test. js */

//작업 지속 유무
function ynCheck() {
    yn = confirm("작업을 계속하시겠습니까?");
    if(yn) {
        alert("작업을 계속합니다.");
    }
    else {
        alert("작업을 중단합니다.");
    }
}