const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

const saltRound = 10;
const secret = '1234';

let users = [];
const posts = [];
let userId = 1;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// userId, name, password, email
app.post('/regist', async (req, res) => {
  try {
    const {name, password, email} = req.body;

    //빈값체크
    if(!name || !password || !email){
      return res.status(400).json({success : false, message : '이름, 비밀번호, email 작성은 필수입니다.'});
    }

    //email중복체크
    if(users.find((user) => user.email === email)){
       return res.status(409).json({success : false, message : 'email이 중복되었습니다.'});
    }

    const hash = await bcrypt.hash(password, saltRound);
    const user = {id : userId++, name, password : hash, email : email};
    users.push(user);

    res.status(201).json({success : true, user:{id : user.id, name : user.name, email : user.email}, message : '회원가입에 성공했습니다.'});

  } catch (error) {
    return res.status(500).json({success : false, message : error.message});
  }
})

app.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    //빈값체크
    if(!password || !email){
      return res.status(400).json({success : false, message : '비밀번호, email 작성은 필수입니다.'});
    }

/*     
    //등록된 이메일이 있는지 체크
    const userInfo = users.find((user) => user.email === email);
    if(!userInfo){
      return res.status(401).json({success : false, message : '로그인정보가 잘못되었습니다.'});
    }

    //비밀번호 같은지 체크
    const compare = await bcrypt.compare(password, users.password);
    if(!compare){
      return res.status(401).json({success : false, message : '로그인정보가 잘못되었습니다.'});
    }    
    */

    // 두개를 하나로 묶는다.
    const userInfo = users.find((user) => user.email === email);
    if(!userInfo || !(await bcrypt.compare(password, userInfo.password)) ){
      return res.status(401).json({success : false,  message : '로그인정보가 잘못되었습니다.'});
    }
    
    const token = jwt.sign({email}, secret, {expiresIn : '1h'});
    //email 확인 후 토큰을 만든다.
    res.status(201).json({success : true, token , message : '로그인되었습니다.'});     
  } catch (error) {
    return res.status(500).json({success : false, message : error.message});
  }
})

function auth(req, res, next){
  
}

app.post('/board', (req, res) => {

})

app.get('/regist', (req, res) => {

})


app.listen(port, (error) => {
  console.log(`server start at ${port}`);
})

module.exports = app;
