// 날짜 함수 연습

'use strict';

//오늘 날짜 - Date()

const today = new Date();   //오늘 날짜 시분초

const year = today.getFullYear();  //연도 4자리
const month = today.getMonth(); //월(기존 월보다 -1)
const date = today.getDate();   //일

const hour = today.getHours();  //시
const minute = today.getMinutes(); //분
const second = today.getSeconds(); //초

const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

console.log("today :", today);
console.log("year :", year);
console.log("month :", month +1);
console.log("date :", date);
console.log("hour :", hour);
console.log("minute :", minute);
console.log("second :", second);
console.log("yymmdd :", yymmdd);

let weekStr = today.getDay(); //요일
console.log("요일 :", weekStr); //일:0, 월:1, 화:2, 수:3, 목:4, 금:5, 토:6 결과값이 숫자로 나옴
let week = ['일', '월', '화', '수', '목', '금', '토'];
console.log("요일 :", week[weekStr]+'요일');

//해당 월의 마지막 일자
let lastDate = new Date(2023, 10, 0);
console.log("lastDate :" + lastDate.getDate());

function dateCheck() {
    let yy = document.getElementById("yy").value;
    let mm = document.getElementById("mm").value;
    
    let strDate = new Date(yy, mm, 0);
    let res = strDate.getDate();
    
    demo.innerHTML = `${yy}년의 ${mm}월의 마지막 날은 ${res}일 입니다.`;
}