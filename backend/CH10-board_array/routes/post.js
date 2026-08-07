var express = require('express');
var router = express.Router();

const posts = [];
let postId = 1;

/*
두가지 방법
router.use('/posts', auth); / router.post('/posts', (req, res) => {
router.post('/posts', auth, (req, res) => {
   */
//게시글작성
router.post('/', (req, res) => {
  try {
    const {title, content} = req.body;
    const email = req.email;

    //빈값체크
    if(!title || !content){
      return res.status(400).json({success : false, message : '제목과 내용 작성은 필수입니다.'});
    }

    const post = {id : postId++, title, content, email};
    posts.push(post);



    res.status(201).json({success : true, post});

  } catch (error) {
     return res.status(401).json({success : false, message : error.message});
  }
});

router.get('/', (req, res) => {
  try {
    res.status(200).json({success : true, posts});
  } catch (error) {
    return res.status(401).json({success : false, message : error.message});
  }
});

module.exports = router;
