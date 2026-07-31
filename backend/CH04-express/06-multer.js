const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const multer = require('multer');

//내장 모듈 별도 설치 없이 기본 제공 
const fs = require('fs');
const path = require('path');
const { log } = require('console');
const { fileURLToPath } = require('url');

const app = express();
const port = 3000;

// diretory 만들기
try {
    fs.readdirSync('files');
    // readdirSync, readdir 동기, 비동기
} catch (error) {
    fs.mkdirSync('files');
}

const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            // 파일 가공 공간 썸네일 사진을 만든다. 지금은 가공없이 done을 실행한다.
            done(null, 'files/')
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname) // .png
            const filename = path.basename(file.originalname, ext) + Date.now() + ext;
            //console.log('ext : ', ext);
            //console.log('filename : ', filename);
             
            done(null, filename)
            // null : error 없어서 null들어감
        }
    }),
    limits : {fileSize : 100 * 1024 * 1024} 
})

app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.json({sucess : true})
});

app.post('/uploadfiles', upload.fields([{name : 'image'}, {name : 'file'}]))
app.post('/uploadfiles', (req, res) => {
    console.log(req.files);
    console.log(req.body, req.body.name);
    res.send('OK');
});

app.post('/upload_images', upload.array('image'));
app.post('/upload_images', (req, res) => {
    console.log(req.files);
    //console.log(req.body, req.body.name);
    res.send('OK');
})

// app.post('/upload', upload.single('imge')); => 이미지 저장까지 완료해 준다 'imge' 는  key값이 된다.
// app.post('/upload', (req, res) => {}); => 상단 한줄을 이렇게 두줄로 나누어서 작성할 수 있다. 둘다 조건이 (method가 같음) 같아서 순서대로 실행 된다.



app.listen(port, () => console.log(`Server start at ${port}`));