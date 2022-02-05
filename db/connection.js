const mysql = require('mysql2');
const util = require('util');
require('dotenv').config();

// connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB_NAME
    },
    console.log('Connected to the Employee Tracker database.')
);

db.connect((err => {
    if (err) throw err;
    console.log('Database connected.');
}));

// node native promisify
db.query = util.promisify(db.query);

module.exports = db;