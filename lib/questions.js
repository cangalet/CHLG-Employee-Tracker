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
    // DepartmentMenu
    department: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?',
        }
    ],
    // RoleMenu
    role: (departmentList) => [
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
            name: 'department',
            message: 'Which department would you like to add this role to?',
            choices: departmentList
        }
    ]
}

module.exports = questions;
