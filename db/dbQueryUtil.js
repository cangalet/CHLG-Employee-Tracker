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
        return this.connection.query('SELECT role.title, role.id, department.name, role.salary FROM role LEFT JOIN department ON role.department_id = department.id');
    }
    addRole(newRole) {
        return this.connection.query('INSERT INTO role SET ?', newRole);
    }
    // Queries for handling Employee Table
    viewEmployees() {
        return this.connection.query(`
        SELECT employee.id AS ID, employee.first_name AS First_Name, employee.last_name AS Last_Name, role.title AS Title, role.salary AS Salary, department.name AS Department, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager
        FROM employee
        JOIN role ON role.id = employee.role_id
        JOIN department ON department.id = role.department_id
        LEFT JOIN employee manager ON employee.manager_id = manager.id
        `);
        
    }
    addEmployee(employee) {
        return this.connection.query('INSERT INTO employee SET ?', employee);
    }
}

module.exports = new dbQueryUtil(connection);

