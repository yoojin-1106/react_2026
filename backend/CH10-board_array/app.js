const express = require('express');
const app = express();
const port = 3000;

const auth = require('./common/auth'); 
const userRouter = require('./routes/users'); 
const postRouter = require('./routes/post'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter); 
//app.use('/posts', auth);
app.use('/posts', auth, postRouter); 

app.listen(port, (error) => {
  console.log(`server start at ${port}`);
});

module.exports = app;
