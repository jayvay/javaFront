//배열 처리에 대한 사용 예시
'use strict';

let arr1 = [    //자바와 달리 타입이 다른데도 배열에 다 들어감
    '문자 자료',
    5,
    [2,4,6,8],
    {tel : '010-1234-1234'}, //객체(클래스)
    function() {console.log('안녕하세요');} //익명 함수
];

console.log("arr1 : " , arr1);  //배열 자체를 출력했을 때 함수(arr1[4])의 경우 함수 안의 내용까지 나오진 않음
console.log("1. :" , arr1[2]);
console.log("2. :" , arr1[4]);  //요소를 직접 출력하면 함수 안 내용도 나옴

console.log("-------------------");
let arr2 = new Array();
arr2[0] = '감자',
arr2[1] = 15,
arr2[2] = [1,3,5,7],
arr2[3] = {name : '홍길동'},
arr2[4] = function() {console.log("안뇽");};
console.log("arr2 : ", arr2);

arr2.push(25);  //25를 뒤로 추가
console.log("arr2 : ", arr2);


console.log("===================");
let str1 = arr2.join('-');  //각 요소를 '-'으로 묶었다..
console.log("str1 : " , str1);

arr2.forEach(function(data, idx) {  //32~4번 다 같은 내용(코드 축약하는 과정)
    console.log(data, " : ", idx);
});
console.log("------");

arr2.forEach((data, idx) => {
    console.log(data, " : ", idx);
});
console.log("------");

arr2.forEach((data, idx) => console.log(data, " : ", idx));
console.log("------");

arr2.map((data, idx) => console.log(data, " : ", idx));
console.log("------");

// 수직으로 걸러내기 : filter
arr2.filter(function(data, idx) {console.log(data, " : ", idx);});
console.log("------");
arr2.filter((data, idx) => console.log(data, " : ", idx));


console.log("===================");;
let res1 = arr2.filter((data, idx) => idx % 2 == 0); 
console.log("res1 : " , res1);   //짝수 인덱스만 걸러내기

arr2.filter((data, idx) => idx % 2 == 0)
        .map((data, idx) => console.log("연습>", data, " : ", idx)); 

let res2 = new Array();
res2 = arr2.filter((data, idx) => idx == 2)
            //.map((data,idx) => console.log("연습2", data, " : " , idx));
            // .map((data) => res2.push(data));
            .map((data) => data);
// res2 = arr2.filter((data, idx) => idx == 2);
console.log("res2 : " , res2);


console.log("===================");;
const arr3 = [10, 2, 39, 48, 23, 25]

// 오름차순 정렬 : sort() - 문자 형식으로 정렬 (수의 크기가 아니라 첫 번째 적힌 문자로 비교)
let res3 = arr3.sort();
console.log("res3 : " , res3);

// 오름차순 정렬 : sort((a,b) => a-b) - 숫자 형식으로 정렬
res3 = arr3.sort((a,b) => a-b);   // 예:  a=3, b=5면, a-b는 음수이므로 a<b이다. 즉, 작은 값이 앞에 있게 정렬 된다
console.log("res3(숫자 형식 오름차순) :", res3);

// 내림차순 정렬 : sort((a,b) => b-a) - 숫자 형식으로 정렬
res3 = arr3.sort((a,b) => b-a);  // 예:  a=3, b=5면, b-a가 양수이므로 a<b이다. 따라서 큰 값에서 작은 값으로 정렬 된다
console.log("res3(숫자 형식 내림차순) :", res3);

// 배열의 자료를 역순으로 출력 : reverse() - 문자열 형식으로 거꾸로 정렬
let res4 = arr3.reverse();
console.log("res4(역순) : " , res4);

console.log("arr3 : " , arr3);  //정렬하면 기존 값 순서도 정렬한 상태로 바뀜
arr3.forEach((data, idx) => console.log(data, " : ", idx));

console.log("===================");;
// 최대 / 최소값
let max = Math.max(10, 2, 39, 48, 23, 25);  //Math는 숫자로 봄
console.log("max : " , max);

let min = Math.min(10, 2, 39, 48, 23, 25);
console.log("min : " , min);

let max2 = Math.max(...arr3);   // '...' : 배열 안의 목록 이라는 뜻
console.log("max2 : " , max2);

let min2 = Math.min(...arr3);   
console.log("min2 : " , min2);

