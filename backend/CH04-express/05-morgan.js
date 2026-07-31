const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const port = 3000;

dotenv.config({path : '../.env'});

process.env.COOKIE_SECRET;
console.log('COOKIE_SECRET : ', process.env.COOKIE_SECRET);
console.log('PORT : ', process.env.PORT);
console.log('DB_PASSWORD : ', process.env.DB_PASSWORD);


app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log(`app.use()`);
    next();
});

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};

app.use(requestTime);

app.use('/', (req, res, next) => {
    console.log(`app.use(/)`);
    next();
});

app.all('/', (req, res, next) => {
    console.log(`app.all(/)`);
    next();
});

app.all('/about', (req, res, next) => {
    console.log(`app.all(/about)`);
    next();
});

app.get('/', (req, res) => {
    console.log(`app.get(/)`);
    res.send('OK');
});

app.get('/about', (req, res) => {
    console.log(`app.get(/about)`);
    res.send('OK');
});

app.post('/', (req, res) => {
    console.log(`app.post(/)`);
    res.send('OK');
});

app.post('/about', (req, res) => {
    console.log(`app.post(/about)`);
    res.send('OK');
});

app.put('/', (req, res) => {
    console.log(`app.put(/)`);
    res.send('OK');
});

app.delete('/', (req, res) => {
    console.log(`app.delete(/)`);
    res.send('OK');
}); 

app.listen(port, (req, res) => {
    console.log(`Server start at ${port}`);
});