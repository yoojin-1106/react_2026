const express = require('express');
const router = express.Router();
const con = require('../config/db');

router.use(express.urlencoded());
router.use(express.json());

router.post('/', (req, res) => {
    const queryString = 'Insert into car values (?, ?, ?, ?)';
    const car = req.body;

    const params = [
          car.cno
        , car.model
        , car.no
        , car.sno
    ]
    // const params = [...car] 가능하나 순서나 다른것이 들어올수도 잇음

    con.query(queryString, params, (error) => {
        let result = {};
        if(error){
            result = {
                  success : false
                , document : []
                , message : error.message
            };
        }else{
             // state[201]
            result = {
                  success : true
                , document : car
                , message : 'car에 추가 되었습니다.'
            };
        }
        res.json(result);
    })
})

router.get('/', (req, res) => {
    const sql = `select * from car`;
    con.query(sql, (error, rows) => {
        let result = {};
        if(error){
            result = {
                  success : false
                , document : []
                , message : error.message
            };
        }else{
             // state[200]
            result = {
                  success : true
                , document : rows
                , message : '성공했습니다.'
            };
        }
        res.send(result);
    })
})

router.get('/:cno', (req, res) => {
    const sql = `select * from car where cno = ${cno}`;
    con.query(sql, (error, rows) => {
        let result = {};
        if(error){
            result = {
                  success : false
                , car : []
                , message : error.message
            };
        }else{
            // state[200]
            result = {
                  success : true
                , car : rows
                , message : '성공했습니다.'
            };
        }
        res.send(result);
    })
})

router.put('/:cno', (req, res) => {
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

router.delete('/:cno', (req, res) => {
    const cno = req.params.cno;
    const car = req.body;
    const sql = `delete from car where cno = ${cno} `;

    con.query(sql, (error) => {
        let result = {};
       
        if(error){
            result = {
                  success : false
                , message : error.message
            }
        }else{
             // state[200]
            result = {
                  success : true
                , message : '삭제되었습니다.'
            }
        }
        res.json(result);
    })
})


module.exports = router;