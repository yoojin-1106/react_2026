//const auth = (req, res, next) => {} / module.exports = auth;
// function auth(req, res, next){}  /  module.exports = auth;


//토큰
module.exports =  (req, res, next) => {
    
    const jwt = require('jsonwebtoken');
    const secret = '1234';
    const headers = req.headers.authorization || '';
    //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF3ZXJAZGRkZC5jb20iLCJpYXQiOjE3ODYwNzIwNjAsImV4cCI6MTc4NjA3NTY2MH0.rjGhwGol2KHA8uCbb5YaoSLdWBWEWM4GGCF8t9KM9SE
    //token
    //console.log('temp : ', temp);
  
    const token = headers.startsWith('Bearer') ? headers.slice(7) : null;
    // startsWith : Beaer로 시작하느냐

    if(!token){
        return res.status(401).json({success : false, message : 'token이 없습니다.'});
    }

    try {
        const {email} = jwt.verify(token, secret);
        req.email = email;
        next();
    } catch (error) {
        return res.status(401).json({success : false, message : `유효하지 않는 토큰입니다. : ${error.message}`});
    }

}

