import express from "express";
import mysql2 from "mysql2";

{
  /* 포트를 8000으로 설정하기 */
}
const app = express();
// json 데이터를 주고받기위한 설정

app.use(express.json());

app.listen(8000, () => {
  console.log("서버 시작!");
});
/* createConnection 설정 */
const db = mysql2.createConnection({
  host: "127.0.0.1",
  user: "user_ex",
  password: "1234",
  port: "3306",
  database: "db_ex",
});
/* connect */
db.connect((err) => {
  console.log("db 연결 성공!");
  console.log("err", err);
});

app.get("/", () => {
  console.log("기본주소 요청");
});

// gello get 요청이 오면 콘솔에 hello 주소 요청 출력
app.get("/hello", () => {
  console.log("hello 주소 요청");
});

app.get("/qs", (req) => {
  console.log(req.query);
  const { p1, p2 } = req.query;
  // console.log 방식 2가지
  console.log("p1: " + p1 + ", p2: " + p2);
  console.log(`p1: ${p1}, p2: ${p2}`);
});

// board/10, product/6
app.get("/:id", (req) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
});

app.post("/hello", () => {
  console.log("hello post 요청");
});

app.post("/post-req", (req) => {
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.age);
  const { name, age } = req.body;
  console.log(`name: ${name}, age: ${age}`);
});

// 목록조회
app.get("/nations/list", (req, res) => {
  const sql = "select * from nations_table";
  db.query(sql, (err, results, fields) => {
    console.log("err", err);
    console.log("results", results);
    console.log("fields", fields);
    res.json(results);
  });
});

// 상세조회
app.get("/nations/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const sql = "select * from nations_table where id=?";
  db.query(sql, [id], (err, results, fields) => {
    console.log("err", err);
    console.log("results", results);
    if (results.length == 0) {
      // 조회결과 없음
      res.status(404).send("요청하신 데이터를 찾을 수 없습니다.");
    } else {
      res.status(200).json(results);
    }
  });
});

// 저장기능
app.post("/nations/save", (req) => {
  const { name, capital, population } = req.body;
  console.log(`name: ${name}, capital: ${capital}, population: ${population}`);
  const sql =
    "insert into nations_table(name, capital, population) values(?,?,?)";
  db.query(sql, [name, capital, population], (err, results, fields) => {
    console.log("err", err);
  });
});

// 수정기능
app.put("/nations/:id", (req, res) => {
  const { id, name, capital, population } = req.body;
  const sql = "update nations_table set population=? where id=?";
  db.query(sql, [population, id], (err, results, fields) => {
    console.log("err", err);
    res.status(200);
  });
});

// 삭제기능
app.delete("/nations/:id", (req, res) => {
  const id = req.params.id;
  const sql = "delete from nations_table where id=?";
  db.query(sql, [id], (err, results, fields) => {
    console.log("err", err);
  });
});
