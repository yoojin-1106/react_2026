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

/* const con = mysql.createConnection({
    host : 'localhost'
    , user : 'root'
    , password : '0000'
    , database : 'school'
}); */

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/book', (req, res) => {
    const queryString = 'Insert into book values (?, ?, ?, ?, ?)';
    const book = req.body;

    const params = [
          book.bno
        , book.title
        , book.author
        , book.no
        , book.sno
    ]

    con.query(queryString, params, (error) => {
        let result = {};
        if(error){

     /*        res.status(503).json({success : false
                , document : []
                , message : error.message}); 
                이처럼 status code를 활용하는것을 적극 권장하고 있다.
                */
            result = {
                  success : false
                , document : []
                , message : error.message
            };
        }else{
            result = {
                  success : true
                , document : book
                , message : 'book에 추가 되었습니다.'
            };

       /*         res.status(201).json({success : true
                , book
                , message : 'book에 추가 되었습니다.'); 
                이처럼 status code를 활용하는것을 적극 권장하고 있다. */

            
            /* book:book 처럼 key, value가 같으면 book으로 함축하여 쓸수 있다.
             result = {
                  success : true
                , book
                , message : 'book에 추가 되었습니다.'
            }; */

        }
        res.json(result);
    })
})

app.get('/book', (req, res) => {
    const sql = `select * from book`;
    con.query(sql, (error, rows) => {
        let result = {};
        if(error){
            result = {
                  success : false
                , book : []
                , message : error.message
            };
        }else{
            result = {
                  success : true
                , book : rows
                , message : '성공했습니다.'
            };
        }
        res.send(result);
    })
})

app.put('/book/:bno', (req, res) => {
    const bno = req.params.bno;
    const book = req.body;
    //console.log(bno);
    
    const sql = `update book set title = ?, author = ? where bno = ? `;
    const params = [
          book.title
        , book.author
        , bno
    ]
    //console.log(sql);
    con.query(sql, params, (error) => {
        let result = {};
       
        if(error){
            result = {
                  success : false
                , data : book
                , message : error.message
            }
        }else{
            result = {
                  success : true
                , data : book
                , message : '수정되었습니다.'
            }
        }
        // console.log(result);
        res.json(result);
    })
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
        // console.log(result);
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
        //console.log(rows);
        if(error){
             result = {success : false, message : error.message};
            res.json(result);
        }else if(rows.length < 1){
            result = {success : false, message : '해당학생은 존재하지 않습니다.'};
            res.json(result);
        }else{
            const student = rows[0];
            console.log(student);
            con.query(sql2, (error, data) => {
                console.log(data);
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