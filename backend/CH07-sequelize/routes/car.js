const router = require('express').Router();
const { Car } = require('../models');
const { count } = require('../models/Car');

router.post('/', async (req, res) => {
    try {
        const {model, studentId} = req.body;
        const car = await Car.create({model, studentId});
        res.status(201).json({success : true, document : car, message : '자동차추가성공'});
    } catch (error) {
        res.status(500).json({success : false,  message : error.message});
    }
})

router.get('/', async (req, res) => {
    try {
        const car = await Car.findAndCountAll({
              order: [['id', 'DESC']]
            , limit: 10
        });
        res.status(200).json({success : true, document : car, message : '조회성공'})
    } catch (error) {
        res.status(500).json({success : false,  message : error.message});
    }
})

router.route('/:id')
    .put(async (req, res) => {
        try {
            const {model} = req.body;
            const params = {model};
            const option = {where : {id : req.params.id}}
            const [result] = await Car.update(params, option);
          
            if(result === 0){
                res.status(404).json({success : false, document : [],  message : '해당차량이 없습니다.'});
            }
            const document = await Car.findByPk(req.params.id);
            res.status(200).json({success : true, document,  message : '수정되었습니다.'});
        } catch (error) {
            res.status(500).json({success : false, document : [],  message : error.message});
        }
    })
    .get(async (req, res) => {
        try {
            const document = await Car.findByPk(req.params.id);
            if(!document){
                return res.status(404).json({success : false, document : [], message : '차량이 존재하지 않습니다.'});
            }
            res.status(200).json({success : true, document, message : '조회가 완료되었습니다.', count : document.length});
        } catch (error) {
            res.status(500).json({success : false, document : [],  message : error.message});
        }
    })
    .delete(async (req, res) => {
        try {
                //먼저 해당 id가 있는지 확인한다.
            const document = await Car.findByPk(req.params.id);
            if(document === 0){
                return res.status(404).json({success : false, document : [],  message : '차량이 존재하지 않습니다.'});
            }

            // 있으면 삭제 
            const option = {where : {id : req.params.id}}
            await Car.destroy(option);
           
            //삭제후 전체 조회를 한다.
            const car = await Car.findAndCountAll({
                  order: [['id', 'DESC']]
                , limit: 10
            });
            res.status(200).json({success : true, car, message : '삭제 되었습니다.'});
        } catch (error) {
            res.status(500).json({success : false, document : [],  message : error.message});
        }
    })

module.exports = router;