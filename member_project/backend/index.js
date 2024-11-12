import express from 'express';
import mysql2 from 'mysql2';

const app = express();
app.use(express.json());

const db = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'user_ex',
    password: '1234',
    port: '3306',
    database: 'db_ex',
});

db.connect((err) => {
    console.log('connection');
    console.log('err', err);
});

app.listen(8000, () => {
    console.log('server Start');
});

app.get('/', () => {
    console.log('기본주소');
});
