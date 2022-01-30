const connection = require('./connection');

class dbQueryUtil {
    constructor(connection) {
        this.connection = connection;
    }
    // Queries for handling Department Table
    viewDepartments() {
        return this.connection.query('SELECT * FROM department');
    }
    addDepartment(department) {
        return this.connection.query('INSERT INTO department SET ?', department);
    }
    // Queries for handling Role Table
    viewRoles() {
        return this.connection.query('SELECT * FROM role LEFT JOIN department ON role.department_id = department.id');
    }
    addRole(role) {
        return this.connection.query('INSERT INTO role SET ?', role);
    }
    // Queries for handling Employee Table
    viewEmployees() {
        return this.connection.query('SELECT * FROM employee');
    }
    addEmployee(employee) {
        return this.connection.query('INSERT INTO employee SET ?', employee);
    }
}

module.exports = new dbQueryUtil(connection);

