import {Link} from "react-router-dom";

// const Header = function() { 근데 거의 arrow function으로 쓴단다
const Header = () => {
    return(
        //return 안 가장 큰 태그 나오기 전까진 javaScript
        <div className="header"> 
            {/*jsx 문법 적는 곳*/}
            {/* <h2>이곳은 Header 입니다.</h2> */}
            {/* 
            <a href="https://www.naver.com">Home</a> 이거 되긴 되는데 안 써요
            <a href="#">Comp1</a>
            <a href="#">Comp2</a>
            <a href="#">Comp3</a> 
            */}

            {/* 하이퍼링크 달 때 react에서는 a태그 대신에 router를 사용한다. router는 href 대신에 Link태그를 사용한다.*/}
            <Link to = "/">Home</Link>  {/* '/' == localhost:3000/ */}
            <Link to = "/mbc">Comp1</Link>
            <Link to = "/Comp2">Comp2</Link>
            <Link to = "/Comp3">Comp3</Link>
        </div>
    );
}

export default Header;