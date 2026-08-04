const mysql = require('mysql2');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path : '../.env'});
const port = 3000;

const dbconfig = require('./config/db.js');
const con = mysql.createConnection(dbconfig);

con.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패:', err.message);
    return;
  }
  console.log('MySQL 연결 성공!');
});

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


module.exports = con;
export default connction_export;