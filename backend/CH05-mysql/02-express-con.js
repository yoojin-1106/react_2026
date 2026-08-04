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

/* const con = mysql.createConnection({
    host : 'localhost'
    , user : 'root'
    , password : '0000'
    , database : 'school'
}); */

const app = express();


app.get('/', (req, res) => {
    res.send('express and mysql connction test server.');
  /*   const query = 'select * from student';
    con.query(query, (error, rows) => {
        if(error) throw new Error(error);
        // res.send(rows);
        console.log(rows);
        
        res.json({sucess : true, document : rows});
        // 보통 메타 데이터가 있어서 json형태로 가공해서 프론트에 던저준다.
    }) */
})

app.get('/student', (req, res) => {
    const queryString = 'select * from student';
/*  const queryString = 'select * from student1'; 
     {
    "sucess": false,
    "document": [],
    "message": "Table 'school.student1' doesn't exist"
    }  
    이렇게 메시지를 띄운다
    */
    con.query(queryString, (error, rows) => {
        let result = {};
        //if(error) throw new Error(error);
        if(error){
            result = {
                sucess:false
                , document:[]
                , message:error.message
            };
        }else{
            // res.send(rows);
            console.log(rows);
            result = {
                sucess:true
                , document:rows
                , message:'조회에 성공했습니다.'
            };
            // 보통 메타 데이터가 있어서 json형태로 가공해서 프론트에 던저준다.
        }
        res.send(result);
    })
})

app.get('/student/:id', (req, res) => {
    const id = req.params.id;
    const queryString = `select * from student where no = ${id}`;
    con.query(queryString, (error, rows) => {
        let result = {};
        if(error){
            result = {
                  sucess : false
                , document : []
                , message : error.message
            };
        }else{
            // res.send(rows);
            console.log(rows);
            result = {
                  sucess : true
                , document : rows
                , message : '조회에 성공했습니다.'
            };
            // 보통 메타 데이터가 있어서 json형태로 가공해서 프론트에 던저준다.
        }
        res.send(result);
    })
})


app.listen(port, () => {
    console.log(`mysql express server start at ${port}`);
})