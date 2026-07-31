//const express = require('express');
//console.log(express);
//const app = express();
 const app = require('express')();
 // 둘이 합쳐  chaning으로 -> function 형태라서 뒤에 () 를 붙인다.
//console.log(app);
const port = 3000;
let person = [{name : '기미밈', age : 30, team : 'LAFC'}];

app.use(require('express').json()); 
// raw정보를 request.body에 담는다.
app.use(require('express').urlencoded());
// urlencoded 정보를 request.body에 담는다.
//console.log(app.use(express.json()));

// (property) Application<Record<string, any>>.get: (name: string) => any (+5 overloads)
//console.log(app.get('/', (request, response) => {}));
app.get('/', (request, response) => {
    response.send(`Hello express!!`)
})

app.get('/person', (request, response) => {
    response.json(person)
    //response.json({name : '기미밈', age : 30, team : 'LAFC'})
})

//console.log(app.post('/', (request, response) => {}));
app.post('/person', (request, response) => {
    person.push(request.body);
    response.json(request.body);
})


app.listen(port, () => {
     console.log(`server is listening at localhost : ${port}`);
})    