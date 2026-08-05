const dotenv = require('dotenv');
const mysql = require('mysql2');
const path = require('path');
dotenv.config({path : path.join(__dirname, '../.env')});


const config = {
      host : process.env.DB_HOST || 'localhost'
    , user : process.env.DB_USER || 'root'
    , password : process.env.DB_PASSWORD || 'password'
    , database : process.env.DB_NAME || 'school'
}

const con = mysql.createConnection(config);
module.exports = con;

// module.exports = mysql.createConnection(config);
// router 에서 const con = require('db.js'); 로 받아 주소를 사용할 수 있다. const con = require('../config/db');