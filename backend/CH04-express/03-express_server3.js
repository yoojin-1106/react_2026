const express = require('express');
const app = express();
const port = 3000;

let posts = [];

app.use(express.json());
app.use(express.urlencoded());
// 이것들도 middleware이다.

// app.get('/', (_, res) => {  => get은 차피 respone만 하기 때문에 request를 생략 할 수 있다.
app.get('/post', (req, res) => {
    //posts.push({name : 'kimjongsik', age : 11});
    res.json(posts);
});

app.post('/post', (req, res) => {
    const {title, name, text} = req.body;
    const post = {id : posts.length + 1, ...req.body, created : Date()};
    posts.push(post);
    res.json({success : true, ...post});
});

app.delete('/post/:id', (req, res) => {
    const id = req.params.id;
    //console.log(id);

    const post = posts.find((post) => post.id === +id)
    if(!post){
        res.json({sucess : false, message : `post data ${id} not found.`})
    }

    const newPost = posts.filter((post) => { 
        //console.log(post.id);
        return +id !== post.id
    });
    //console.log(posts.length);
    //console.log(newPost.length);
    if(posts.length !== newPost.length){
        posts = newPost;
        res.json({sucess : true, newPost});
    }else{
        res.json({sucess : false});
    }
});

app.listen(port, (req, res) => {
    console.log(`서버 연결이 완료 되었습니다. : ${port}`);
});