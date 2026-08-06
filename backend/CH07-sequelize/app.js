const express = require('express');
const {sequelize} = require('./models/index');
// sequelize 객체를 사용하겠다
const { sync } = require('./models/Student');


const path = require('path');
//const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = 3000;

//const indexRouter = require('./routes/index'); 
const studentRouter = require('./routes/student'); 


const app = express();

sequelize.sync({force : true, alter : true, logging : false, benchmark : true}).then(() => console.log('db동기화 완료')).catch((error) => console.error('동기화실패', error.message));
// DB동기화 
// alter : ALTER TABLE 
// force : 전원이 갑자기 꺼지거나 시스템이 다운되더라도 데이터 손실을 절대로 허용하면 안 되는 데이터베이스, 로그, 결제 시스템 등에서 파일 쓰기를 수행한 직후 안전하게 저장되었음을 보장받아야 할 때 사용합니다.


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter); 
app.use('/student', studentRouter); 

app.listen(port, () => {
    console.log(`start server at ${port}`);
})

module.exports = app;
