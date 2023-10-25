import React, { useState } from 'react';

// Hooks : 값(변경되는 값들)을 넣어주기 위한 문법 -- const [변수명, 함수명] = useState(초기값);
// 함수명은 변수명의 setter함수명이다. -- setXxx...

let para1Sw = 0;

const Comp2 = () => {
    const [para1 , setPara1] = useState("초기값");
    
    const myFunc = () => {
        if(para1Sw === 0) {
            setPara1('안녕');
            para1Sw = 1;
        }
        else {
            setPara1("안녕못해")
            para1Sw = 0;
        }
    }

    const [count, setCount] = useState(100);

    // count 값 1씩 증가하는 함수
    const onIncrease = () => {
        setCount(count + 1);
    }

    // count 값 1씩 감소하는 함수
    const onDecrease = () => {
        setCount(count - 1);
    }

    // text 상자의 내용을 변경하면 값을 바꿔주기 위한 state
    const [para2, setPara2] = useState('');
    const [paraV, setParaV] = useState('');

    // 텍스트박스의 값을 변경하면 para2의 값을 변경시켜서 화면에 출력하는 함수
    const textInput = (e) => {
        console.log(e.target);
        console.log(e.target.name, e.target.value);
        
        const {name, value} = e.target; //구조분할
        setParaV(name);
        setPara2(value); 
    }    

    // 버튼을 누르면 색을 변경시켜주는 state
    const [backColor, setBackColor] = useState("red");

    return (
        <div className='comp2'>
            <h3>Comp2</h3>      
            <hr/>
            <p>
                <button onClick={myFunc}>버튼을 눌러보세요</button> &nbsp;
                {para1}
            </p>
            <hr/>
            <div>count : {count}</div>
            <div>
                <button onClick={onIncrease}>증가</button> &nbsp;
                <button onClick={onDecrease}>감소</button>
            </div>
            <hr/>
            <div>입력변수 : {paraV}</div>
            <div>입력값 : {para2}</div>
            <input type='text' name="para2" onChange={textInput} />
            <hr/>
            
            {/* CSS 적용하기 */}
            <p style={{backgroundColor: backColor, fontSize: '15pt', color: 'black'}}>색깔 바꾸기</p>
            <div>
                <button onClick={() => setBackColor("orange")}>오뤤지</button> &nbsp;
                <button onClick={() => setBackColor("yellow")}>옐로우</button> &nbsp;
                <button onClick={() => setBackColor("red")}>레드</button>
            </div>
        </div>
    );
};

export default Comp2;