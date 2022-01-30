const mysql = require('mysql2');

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

module.exports = db;
