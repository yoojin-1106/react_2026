const router = require('express').Router();
const { urlencoded } = require('express');
const { Book } = require('../models');
const { count } = require('../models/Book');

router.post('/', async (req, res) => {
    try {
        // promise에 포함되어있다.
        const {title, author} = req.body;
        const book = await Book.create({title, author});
        res.status(201).json({success : true, document : book, message : '도서추가성공'});
    } catch (error) {
        res.status(500).json({success : false,  message : error.message});
    }

})

router.get('/', async (req, res) => {
    try {
        const book = await Book.findAndCountAll({
              order: [['id', 'DESC']]
            , limit: 10
        });
        res.status(200).json({success : true, document : book, message : '조회성공'})
    } catch (error) {
        res.status(500).json({success : false,  message : error.message});
    }
})

router.route('/:id')
    .put(async (req, res) => {
        try {
            const {title, author} = req.body;
            const params = {title, author};
            const option = {where : {id : req.params.id}}
            const document = await Book.update(params, option);
            res.status(200).json({success : true, document : params,  message : '수정되었습니다.'});
        } catch (error) {
            res.status(500).json({success : false, document : [],  message : error.message});
        }
    })
    .get(async (req, res) => {
        try {
            const document = await Book.findByPk(req.params.id);
            if(!document){
                return res.status(404).json({success : false, document : [], message : '도서가 존재하지 않습니다.'});
            }
            res.status(200).json({success : true, document, message : '조회가 완료되었습니다.', count : document.length});
        } catch (error) {
            res.status(500).json({success : false, document : [],  message : error.message});
        }
    })
    .delete(async (req, res) => {
        try {
            const option = {where : {id : req.params.id}}
            const document = await Book.destroy(option);
            res.status(200).json({success : true, message : '삭제 되었습니다.'});
        } catch (error) {
            res.status(500).json({success : false, document : [],  message : error.message});
        }
    })

module.exports = router;