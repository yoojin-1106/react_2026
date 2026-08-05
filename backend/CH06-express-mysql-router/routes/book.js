const express = require('express');
const router = express.Router();
const con = require('../config/db');

router.use(express.urlencoded());
router.use(express.json());

router.post('/', (req, res) => {
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

        }
        res.json(result);
    })
})

router.get('/', (req, res) => {
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


router.route('/:bno')
    .get((req, res) => {
        const sql = `select * from book where bno = ${bno}`;
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
    .put((req, res) => {
        const bno = req.params.bno;
        const book = req.body;
        
        const sql = `update book set title = ?, author = ? where bno = ${bno} `;
        const params = [
              book.title
            , book.author
        ]
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
            res.json(result);
        })
    })
    .delete((req, res) => {
        const sql = `delete from book where bno = ${bno} `;

        con.query(sql, (error) => {
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


/* 
router.put('/:bno', (req, res) => {
    const bno = req.params.bno;
    const book = req.body;
    
    const sql = `update book set title = ?, author = ? where bno = ? `;
    const params = [
          book.title
        , book.author
        , bno
    ]
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
        res.json(result);
    })
})

router.delete('/:bno', (req, res) => {
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
}) */

module.exports = router;