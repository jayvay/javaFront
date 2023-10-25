import { student, students } from "../data/data"; //확장자 생략 가능
import Student from "./Student";

const Comp1 = () => {
    /*const student = {
        name: '홍길동',
        age: 25,
        address: '서울'
    }

    const students = [
        {
            name: '홍길동',
            age: 25,
            address: '서울'
        },
        {
            name: '김말숙',
            age: 30,
            address: '부산'
        },
        {
            name: '이기자',
            age: 45,
            address: '제주'
        }
    ];
    */

    return(
        <div className="comp1">
            <h3>이곳은 Comp1 입니다.</h3>
            {/*1개 값만 가져오기*/}
            <p>
                {student.name} / {student.age} / {student.address}
            </p>

            {/*여러 개 값(배열) 가져오기*/}
            {/*
            <p>
                {
                    students.map( s => (
                        <span>{s.name} / {s.age} / {s.address}<br/></span>
                    ))
                }
            </p>
            */}

            <hr/>

            {/* 1개 자료 출력 */}
            <Student stu={student} />

            {/* 여러 개 자료 출력 */}
            {students.map( s => (
                <div>{s.name} / {s.age} / {s.address}</div>
            ))}
        </div>
    );
}

export default Comp1;