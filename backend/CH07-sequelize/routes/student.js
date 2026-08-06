const router = require('express').Router();
const { urlencoded } = require('express');
const { Student } = require('../models');
const { count } = require('../models/Student');
// 전체 함수(Student) 밑에 있는 요소들을 매소드 라고 한다. .create, .findAndCountAll 등등..


router.post('/', async (req, res) => {
    try {
        // promise에 포함되어있다.
        const {name, major, grade, gender} = req.body;
        const student = await Student.create({name, major, grade, gender});
        // const student = await Student.create({name, major, grade, gender}); 순서때문에 직접 지정한다.
        res.status(201).json({success : true, document : student, message : '학생추가성공'});
    } catch (error) {
        res.status(500).json({success : false,  message : error.message});
    }

})

router.get('/', async (req, res) => {
    try {
/*         const {id, name, major, grade, gender} = req.body;
        const student = await Student.findAndCountAll(
          {  attributes : ['id', 'name', 'major', 'grade', 'gender']
            , order: [['createdAt', 'DESC']]
            , limit: 10
            , offset: 20
          }
        ); */
        //const student = await Student.findAll();
        const student = await Student.findAndCountAll({
              attributes : ['id', 'name', 'major', 'gender']
            , order: [['id', 'DESC'], ['name', 'ASC']]
            , limit: 10
        });
        res.status(200).json({success : true, document : student, message : '조회성공'})
    } catch (error) {
        res.status(500).json({success : false,  message : error.message});
        //next();
    }
})

router.route('/:id')
    .put(async (req, res) => {
        try {
            const {name, major, grade, gender} = req.body;
            const params = {name, major, grade, gender};
            const option = {where : {id : req.params.id}}
            const document = await Student.update(params, option);
            res.status(200).json({success : true, document : params,  message : '수정되었습니다.'});
        } catch (error) {
            res.status(500).json({success : false, document : [],  message : error.message});
        }
    })
    .get(async (req, res) => {
        try {
            const document = await Student.findByPk(req.params.id);
            if(!document){
                return res.status(404).json({success : false, document : [], message : '학생이 존재하지 않습니다.'});
            }
            res.status(200).json({success : true, document, message : '조회가 완료되었습니다.', count : document.length});
        } catch (error) {
            res.status(500).json({success : false, document : [],  message : error.message});
        }
    })
    .delete(async (req, res) => {
        try {
            const option = {where : {id : req.params.id}}
            const document = await Student.destroy(option);
            res.status(200).json({success : true, message : '삭제 되었습니다.'});
        } catch (error) {
            res.status(500).json({success : false, message : error.message});
        }
    })

module.exports = router;