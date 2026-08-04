//import connction_export from './connction_export.js';

const mysql = require('mysql2');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path : '../.env'});
const port = 3000;

const dbconfig = require('../config/db.js');
const con = require('dotenv');

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

app.get('/', (req, res) => {
    res.send('express and mysql connction test server.');
})

app.get('/student', (req, res) => {
    const queryString = 'select * from student';
    con.query(queryString, (error, rows) => {
        let result = {};
  
        if(error){
            result = {
                success:false
                , document:[]
                , message:error.message
            };
        }else{
            console.log(rows);
            result = {
                success:true
                , document:rows
                , message:'조회에 성공했습니다.'
            };
        
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
                  success : false
                , document : []
                , message : error.message
            };
        }else{
            console.log(rows);
            if(rows.length === 0){
                result = {
                      success : true
                    , document : rows
                    , message : '데이터가 없습니다.'
                };
            }else{
                result = {
                      success : true
                    , document : rows
                    , message : '조회에 성공했습니다.'
                };
            }
        }
        res.send(result);
    })
})

app.post('/student', (req, res) => {
   const student = req.body;
   const sql = 'Insert into student values (?, ?, ?, ?, ?)';
    const params = [
          student.no
        , student.name
        , student.major
        , student.grade
        , student.gender       
    ]
    let result = {};
     con.query(sql, params, (error) => {
        if(error){
             result = {success : false, document : [], message : error.message};
        }else{
            result = {success : true, document : student, message : '학생추가성공'};
        }
        res.json(result);
     });
})


app.delete('/book/:bno', (req, res) => {
    const bno = req.params.bno;
    const book = req.body;
    const sql = `delete from book where bno = ? `;

    con.query(sql, [bno], (error) => {
        let result = {};
       
        if(error){
            result = {
                  success : false
                , message : error.message
            }
        }else{
            result = {
                  success : true
                , message : '삭제되었습니다.'
            }
        }
        res.json(result);
    })
})

app.get('/student/:no/book', (req, res) => {
    const no = req.params.no;
    const sql = `select * from student where no = ${no}`;
    const sql2 = `select * from book where sno = ${no}`;
    console.log(no);
    
    let result = {};
    con.query(sql, (error, rows) => {
        if(error){
             result = {success : false, message : error.message};
            res.json(result);
        }else if(rows.length < 1){
            result = {success : false, message : '해당학생은 존재하지 않습니다.'};
            res.json(result);
        }else{
            const student = rows[0];
            con.query(sql2, (error, data) => {
                if(error){
                    result = {success : false, message : error.message};
                    res.json(result);
                }else if(data.length < 1){
                    result = {success : false, message : '책이 존재하지 않습니다.'};
                    res.json(result);
                }else{
                    result = {...student, books : data};
                    res.json(result);
                }
            })
        }
    })

})

app.listen(port, () => {
    console.log(`mysql express server start at ${port}`);
})