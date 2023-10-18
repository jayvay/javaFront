'use strict';

//클래스 생성
class Member {
    //필드      // 필드는 'use strict' 와 관계없이 타입 적지 않아도 됨
    // name;   // 매개변수명과 필드명이 같을 경우 생략 가능
    // age;

    //생성자
    constructor(name, age, color) {
        this.name = name;   //필드를 생략하고 이렇게 적을 수 있다
        this.age = age;
        this.color = color;
    }

    //getter 생성
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
        // return this._age - 1;
    }
    get color() {
        return this._color;
    }

    //setter 생성
    set name(name) {
        this._name = name;
    }
    set age(age) {
        if(age < 1) age = 1;
        this._age = age;
    }
    set color(color) {
        if(color=='검정' || color=='검은색' || color=='흑색') color='검정';
        this._color = color;
    }
}