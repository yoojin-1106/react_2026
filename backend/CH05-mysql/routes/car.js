//import connction_export from './connction_export.js';

const mysql = require('mysql2');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path : '../.env'});
const port = 3000;

const dbconfig = require('../config/db.js');
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

app.post('/car', (req, res) => {
    const queryString = 'Insert into car values (?, ?, ?, ?)';
    const car = req.body;

    const params = [
          car.cno
        , car.model
        , car.no
        , car.sno
    ]

    con.query(queryString, params, (error) => {
        let result = {};
        if(error){
            result = {
                  success : false
                , document : []
                , message : error.message
            };
        }else{
            result = {
                  success : true
                , document : car
                , message : 'car에 추가 되었습니다.'
            };
        }
        res.json(result);
    })
})

app.get('/car', (req, res) => {
    const sql = `select * from car`;
    con.query(sql, (error, rows) => {
        let result = {};
        if(error){
            result = {
                  success : false
                , car : []
                , message : error.message
            };
        }else{
            result = {
                  success : true
                , car : rows
                , message : '성공했습니다.'
            };
        }
        res.send(result);
    })
})

app.put('/car/:cno', (req, res) => {
    const cno = req.params.cno;
    const car = req.body;
    
    const sql = `update car set model = ? where cno = ? `;
    const params = [
          car.model
        , cno
    ]
    con.query(sql, params, (error) => {
        let result = {};
       
        if(error){
            result = {
                  success : false
                , data : car
                , message : error.message
            }
        }else{
            result = {
                  success : true
                , data : car
                , message : '수정되었습니다.'
            }
        }
        res.json(result);
    })
})

app.delete('/car/:cno', (req, res) => {
    const cno = req.params.cno;
    const car = req.body;
    const sql = `delete from car where cno = ? `;

    con.query(sql, [cno], (error) => {
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

app.get('/student/:no/car', (req, res) => {
    const no = req.params.no;
    const sql = `select * from student where no = ${no}`;
    const sql2 = `select * from car where sno = ${no}`;
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
                    result = {success : false, message : '차가 존재하지 않습니다.'};
                    res.json(result);
                }else{
                    result = {...student, cars : data};
                    res.json(result);
                }
            })
        }
    })

})

app.listen(port, () => {
    console.log(`mysql express server start at ${port}`);
})