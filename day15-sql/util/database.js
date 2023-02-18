const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node_quide',
  password: 'adminqwerty',  
});

module.exports = pool.promise();