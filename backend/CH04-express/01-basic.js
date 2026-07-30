const express = require('express');
const app = express();
const port = 3000;

// (property) Application<Record<string, any>>.get: (name: string) => any (+5 overloads)
app.get('/', (request, response) => {
    response.json({success : true})
})

app.get('/person', (request, response) => {
    response.json({name : '기미밈', age : 30, team : 'LAFC'})
})


app.listen(port, () => {
     console.log(`server is listening at localhost : ${port}`);
})    