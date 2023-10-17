// test9.js
// 문자함수 연습
'use strict';

let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg';
let text2 = '   ABC   BCABC   GHI  JKLABCMN.......   ABC... OPQ    ';

// length : 길이
// substring() : 특정위치의 문자열 추출
// indexOf() : 문자열 검색 (인덱스값 반환, 없으면 -1 반환)
// includes() : 문자열 검색 (true/false반환)
// concat() : 문자열 결합
// slice() : 지정된 인덱스 위치부터 문자열 가져오기
// trim() : 문자열의 앞뒤 공백 절삭
// replace()
// replaceAll()
// toUpperCase()
// toLowerCase()
// charAt() : 문자열 1개씩 추출
// charCodeAt() : 지정된 인덱스번호 영문자의 아스키코드 값을 출력
// split() : 지정된 문자를 기준으로 분리, 분리된 자료를 배열로 저장해 사용

// demo.innerHTML = text1;
// demo.innerHTML = text1.length;

let str = "0123456789012345678901234567890<br/>";
str += text2 + '<hr/><br/>';

// str += text1.substring(5);
// str += text1.substring(5, 10);   //인덱스 5번부터 인덱스 10번 바로 전까지의 문자열을 가져온다
// str += text1.indexOf('abcz');
// str += text1.slice(5);
// str += text1.slice(5, 10); //인덱스 5번부터 인덱스 10번 바로 전까지 잘라내기
// str += text1.substr(5, 10);  //인덱스 5번부터 10개의 문자열을 가져온다 (substring과 다름)
// str += text2.replace('ABC', 'OOPPQQ');  //자바의 replace는 모든 데이터 다 바꾸지만, 자바스크립트는 첫 번째 검색된 문자열만 치환
// str += text2.replaceAll('ABC', 'OOPPQQ');  //문장 안의 일치하는 모든 문자열을 치환한다
// str += text1.toUpperCase();
// str += text1.toLowerCase();
// str += text1.concat("안녕",text1,"뭐");
// str += text2 + "안녕";
// str += text2.trim() + "안녕";
// str += "안녕1" + text2.trim() + "안녕2";
// str += "안녕1" + text2.trimStart() + "안녕2";  //앞 공백 지우기
// str += "안녕1" + text2.trimEnd() + "안녕2";  //뒤 공백 지우기
// str += "안녕1" + text1.charAt(3) + "안녕2";
// str += "안녕1" + text1.charCodeAt(0) + "안녕2";

// let temp = text2.split('ABC');
// str += "안녕1" + temp + "안녕2";
// for(let s of temp) {
//     str += s + "<br/>";
// }
// str += "길이 : " + temp.length;

let title = ['지역번호', '국번호', '전화번호'];
let telTemp = '010-1234-1234';

let tels = telTemp.split('-');

tels.forEach((data, idx) => console.log(data, " : ", idx));
tels.forEach( (data, idx) => console.log(title[idx], " : " , data));

tels.forEach((data, idx) => str += data + '<br/>');
demo.innerHTML = str;