const mysql2 = require('mysql2');

const conMysql = mysql2.createConnection({
    host: 'localhost',
    database: 'aula-mvc',
    user: 'root',
    password: '1234'
});

module.exports = conMysql;