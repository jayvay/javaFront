// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Comp1 from './component/Comp1';
import Comp2 from './component/Comp2';
import Comp3 from './component/Comp3';
import Param1 from './component/Param1';
import Param2 from './component/Param2';

function App() {  //컴포넌트 (이름 첫 글자는 무조건 대문자)
  return (        //jsx (주석 : {/**/})
    <div className="App"> {/* 큰 블럭은 하나만 */}
      <BrowserRouter>
        <Header /> {/*컴포넌트 (이름 첫 글자는 무조건 대문자)*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mbc" element={<Comp1 />} />
          <Route path="/Comp2" element={<Comp2 />} />
          <Route path="/Comp3" element={<Comp3 />} />
          <Route path="/param/:mid" element={<Param1 />} />   {/* /param/ 뒤에 변수(값)가 넘어올 때 처리됨 */}
          <Route path="/param" element={<Param2 />} />  {/* /param 뒤에 QueryString(?변수=값&변수=값)으로 값이 전송될 때 처리됨 */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
