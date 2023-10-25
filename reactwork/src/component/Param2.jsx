import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Param2 = () => {

    const [params] = useSearchParams();
    const mid = params.get("mid");
    const page = params.get("page");
    const naesasdasdasda = params.get("naesasdasdasda");
    // parameter가 몇 개인지 모를 때 처리
    console.log("넘어온 변수 개수", params.size);

    const searchVar = [...params]
    console.log(searchVar);

    return (
        <div className='param2'>
            <h2>이곳은 Param2 입니다.</h2>
            <p>id: {mid}</p>
            <p>page: {page}</p>
            <p>page:  {naesasdasdasda}</p>
        
            <hr/>
            {searchVar.map( s => (
                <p>{s[0]} / {s[1]}</p>
            ))}
        </div>
    );
};

export default Param2;