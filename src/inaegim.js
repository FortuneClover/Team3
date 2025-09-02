const express = require('express');
const app = express();
const userController = require('./controllers/userController'); // ✨ 이전에 만든 컨트롤러 파일 불러오기

// 클라이언트가 보낸 JSON 형식의 데이터를 사용할 수 있도록 설정합니다.
app.use(express.json());

// 사용자와 관련된 GET, POST 요청을 컨트롤러 함수와 연결합니다.
// GET 요청은 사용자 목록을 가져오는 데 사용됩니다.
app.get('/api/users', userController.getAllUsers);

// POST 요청은 새로운 사용자를 생성하는 데 사용됩니다.
app.post('/api/users', userController.createUser);

// 서버를 시작하고 3000번 포트에서 요청을 기다립니다.
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});