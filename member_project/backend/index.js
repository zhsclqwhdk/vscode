import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql2.createConnection({
  host: "127.0.0.1",
  user: "user_ex",
  password: "1234",
  port: "3306",
  database: "db_ex",
});

db.connect((err) => {
  console.log("connection");
  console.log("err", err);
});

app.listen(8000, () => {
  console.log("server Start");
});

app.get("/", () => {
  console.log("기본주소");
});

app.post("/member/save", (req, res) => {
  const { member_email, member_password, member_name, member_mobile } =
    req.body.member;
  console.log(member_email, member_password, member_name, member_mobile);
  const sql =
    "insert into member_table(member_email, member_password, member_name, member_mobile) values(?,?,?,?)";
  db.query(
    sql,
    [member_email, member_password, member_name, member_mobile],
    (err, results, fields) => {
      console.log("err", err);
    }
  );
  res.status(200).send("회원가입 성공.");
});

app.get("/member/list", (req, res) => {
  const sql = "select * from member_table";
  db.query(sql, (err, results, fields) => {
    console.log("results", results);
    res.status(200).json(results);
  });
});
