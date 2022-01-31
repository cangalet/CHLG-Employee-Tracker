viewDepartments() {
    
}

const questions = {
    // homeMenu
    home: [
        {
            type: 'list',
            name: 'menuChoice',
            message: 'What would you like to do?',
            choices: ['View Departments', 'View Roles ', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Quit'], 
        }
    ],
    department: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?',
        }
    ],
    role: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the role?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?',
        },
        {
            type: 'list',
            name: 'departmentChoice',
            message: 'What department does the role belong to?',
            choices: dbQueryUtil.viewDepartments(),
        }
    ]
}

module.exports = questions;
