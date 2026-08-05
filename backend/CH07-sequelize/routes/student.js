const router = require('express').Router();
const { urlencoded } = require('express');
const {Student} = require('../models');

router.post('/', async (req, res) => {
    try {
        const {name, major, grade, gender} = req.body;
        const student = await Student.create({name, major, grade, gender});
        //  const student = await Student.create({name, major, grade, gender}); 순서때문에 직접 지정한다.
        res.status(201).json({success : true, document : student, message : '학생추가성공'});
    } catch (error) {
        res.status(500).json({success : true,  message : error.message});
    }

})




module.exports = router;