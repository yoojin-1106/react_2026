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

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('express and mysql connction test server.');
  /*   const query = 'select * from student';
    con.query(query, (error, rows) => {
        if(error) throw new Error(error);
        // res.send(rows);
        console.log(rows);
        
        res.json({success : true, document : rows});
        // 보통 메타 데이터가 있어서 json형태로 가공해서 프론트에 던저준다.
    }) */
})

app.get('/student', (req, res) => {
    const queryString = 'select * from student';
/*  const queryString = 'select * from student1'; 
     {
    "success": false,
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
                success:false
                , document:[]
                , message:error.message
            };
        }else{
            // res.send(rows);
            console.log(rows);
            result = {
                success:true
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

app.listen(port, () => {
    console.log(`mysql express server start at ${port}`);
})