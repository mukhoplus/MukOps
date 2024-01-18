import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import TEST_VERSION from "./version.js";

const PORT = process.env.PORT || 80;

const app = express();

app.set("port", PORT);

// 웹의 헤더 설정을 변경하여 보안성을 올려주는 모듈
app.use(helmet());

// 로그 기록 모듈
app.use(morgan("dev"));

// 쿠키 값 가져오는 모듈
app.use(cookieParser());

// Form에서 넘어오는 값을 얻게 하는 모듈
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTER
app.get("/", (req, res) => {
  res.send(`CI/CD 테스트 ${TEST_VERSION}번 버전입니다.`);
});

// RUN
app.listen(PORT, "0.0.0.0", () => {
  console.log(`${PORT}번 포트에서 서버 실행 중입니다.`);
});
