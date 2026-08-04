const mysql = require('mysql'); 
const express = require('express');
const con = mysql.createConnection({ 
  host: 'localhost', 
  user: 'dbuser', 
  password: 'password', 
  database: 'school', 
}); 
con.connect(); 
con.query('select * from Student', (error, rows) => { 
  if (error) throw error; 
  console.log('students: ', rows); 
}); 
con.end(); 

const dotenv = require('dotenv'); 
dotenv.config(); 
const app = express(); 
const port = process.env.PORT || 3000; 

app.get('/', (req, res) => { 
  con.query('select * from student', (error, rows) => { 
    res.send(rows); 
  }); 
}); 

app.listen(port, () => { 
  console.log('Express server listening on port ' + port); 
});