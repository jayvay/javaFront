import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';  //.js .jsx 똑같게 봐서 확장자 생략 가능
// import reportWebVitals from './reportWebVitals';
//여기서 렌더링 해서 root에 넣음
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
