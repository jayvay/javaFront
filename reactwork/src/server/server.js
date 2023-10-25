
/* express 서버에 연결할 준비 */

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

// express 사용 변수 생성
const app = express();

// express 포트 설정
const PORT = process.env.PORT || 5000;

// body-parser 설정
app.use(bodyParser.json());
app.use(cors());

// Database 접속 정보
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: '3306',
    database: 'javaProject'
});

// 서버 접속
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}`);
});

// db 접속 
conn.connect((err) => {
    if(!err) console.log('Database 접속 성공');
    else console.log('Database 접속 실패');
})