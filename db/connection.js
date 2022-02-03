const mysql = require('mysql2');
const util = require('util');

// connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'HappyHat420',
        database: 'employee_tracker'
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