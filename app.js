const express = require("express");

const app = express();

const PORT = process.env.PORT || 80;
const TEST_VERSION = 0;

app.set("port", PORT);

app.get("/", (req, res) => {
  res.send(`CI/CD 테스트 ${TEST_VERSION}번 버전입니다.`);
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버 실행 중입니다.`);
});
