//정규식 연습
'use strict';

function regexCheck() {
    //정규표현식변수를 먼저 만들어 놓는다.
    //gm은 match()에서만 쓰세요
    const regex1 = /atom/gm; //'atom'이라는 문자열이 포함되어 있으면 true, 없으면 false 반환
    const regex2 = /kbs|mbc|sbs|cjb/g;  //'kbs'or'mbc'or'sbs'or'cjb'문자열을 포함하냐 
    const regex3 = /홍길(동|순)/g;    //'홍길동'or'홍길순'문자열을 포함하냐
    const regex4 = /[a-z]/g;     //영문 소문자를 포함하냐
    const regex5 = /[^a-z]/g;     //영문 소문자만 포함하냐
    const regex6 = /[A-Z]/g;      //영문 대문자를 포함하냐
    const regex7 = /[^A-Z]/g;     //영문 대문자만 포함하냐
    const regex8 = /[0-9]/g;      //숫자를 포함하냐
    const regex9 = /[^0-9]/g;     //숫자만 포함하냐
    const regex10 = /[가-힣]/g;   //한글을 포함하냐
    const regex11 = /[^가-힣]/g;   //한글만 포함하냐
    const regex12 = /[a-zA-Z0-9]/g;   //영문자와 숫자를 포함하냐
    const regex13 = /[^a-zA-Z0-9]/g;   //영문자와 숫자만 포함하냐
    const regex14 = /[^a-zA-Z0-9_]/g;   //영문자와 숫자와 '_'만 포함하냐
    
    const regex21 = /\./g;   //'.'을 포함하냐
    const regex22 = /\d/g;   //\d : 숫자를 포함해야
    const regex23 = /\D/g;   //\D: 숫자를 포함하지 않아야
    const regex24 = /\w/g;   //\w: 영문자,숫자,'_'를 포함해야
    const regex25 = /\W/g;   //\W: 영문자,숫자,'_'를 포함하지 않아야
    const regex26 = /\s/g;   //\s: 공백(탭 포함)을 포함해야
    const regex27 = /\S/g;   //\S: 공백(탭 포함)을 포함하지 않아야

    const regex31 = /홍길동?/g; //'?' 앞의 문자가 0개나 1개 포함 유무
    const regex32 = /홍길자+/g; //'+' 앞의 문자가 1개 이상 포함 유무
    const regex33 = /홍길자*/g; //'*' 앞의 문자가 0개 이상 포함 유무

    let content = document.getElementById("content").value.trim();

    if(content == "") alert("문자열을 입력하세요");
    // else if(content.match(regex)) alert("");
    // else if(!content.match(regex1)) alert("본문에 'atom'이 없어요")
    // else if(!content.match(regex2)) alert("본문에 'kbs' or 'mbc' or 'sbs' or 'cjb'이 없어요");
    // else if(!content.match(regex3)) alert("본문에 '홍길동'or'홍길순'이 없어요");

    // else if(!regex.test(content)) alert("");
    // else if(!regex4.test(content)) alert("영문 소문자를 포함하고 있지 않아요");
    // else if(regex5.test(content)) alert("영문 소문자만 있지 않아요");
    // else if(!regex6.test(content)) alert("영문 대문자를 포함하고 있지 않아요");
    // else if(regex7.test(content)) alert("영문 대문자만 있지 않아요");
    // else if(!regex8.test(content)) alert("숫자를 포함하고 있지 않아요");
    // else if(regex9.test(content)) alert("숫자만 있지 않아요");
    // else if(!regex10.test(content)) alert("한글을 포함하고 있지 않아요");
    // else if(regex11.test(content)) alert("한글만 있지 않아요");
    // else if(!regex12.test(content)) alert("영문자나 숫자를 포함하고 있지 않아요");
    // else if(regex13.test(content)) alert("영문자나 숫자만 있지 않아요");
    // else if(regex14.test(content)) alert("영문자나 숫자나 '_'만 있지 않아요");
    // else if(!regex21.test(content)) alert("'.'를 포함하고 있지 않아요");
    // else if(!regex22.test(content)) alert("'.'를 포함하고 있지 않아요");
    // else if(!regex23.test(content)) alert("'.'를 포함하고 있지 않아요");
    // else if(!regex24.test(content)) alert("'.'를 포함하고 있지 않아요");
    // else if(!regex25.test(content)) alert("'.'를 포함하고 있지 않아요");
    // else if(!regex26.test(content)) alert("'.'를 포함하고 있지 않아요");
    // else if(!regex27.test(content)) alert("'.'를 포함하고 있지 않아요");
    // else if(regex31.test(content)) alert("'홍길' 또는 '홍길?'을(를) 포함하고 있어요");
    // else if(regex32.test(content)) alert("'홍길자' 또는 '홍길자자'을(를) 포함하고 있어요");
    else if(regex33.test(content)) alert("'홍길' 또는 '홍길자' 또는 '홍길자자'을(를) 포함하고 있어요");
    
    else alert("유효성 검사 통과!")






}