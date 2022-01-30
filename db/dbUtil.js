const connection = require('./db/connection');

class dbQueryUtil {
    constructor(connection) {
        this.connection = connection;
    }
    // Queries for handling Department Table
    viewDepartments() {
        return this.connection.query("SELECT * FROM department");
    }
    // Queries for handling Role Table
    viewRoles() {
        return this.connection.query("SELECT * FROM role LEFT JOIN department ON role.department_id = department.id")
    }
}

module.exports = new dbQueryUtil(connection);

// choices: ['View All Employees', 'View All Departments', 'View All Managers', 'Quit'],