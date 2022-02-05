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
    // AddDepartmentMenu
    department: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?',
        }
    ],
    // AddRoleMenu
    role: (departmentList) => [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the role?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?',
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'Which department would you like to add this role to?',
            choices: departmentList
        }
    ],
     // AddEmployeeMenu
     employee: (roleList) => [
        {
            type: 'input',
            name: 'first_name',
            message: "What is the employee's first name?",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the employee's last name?",
        },
        {
            type: 'list',
            name: 'role_id',
            message: "What is the employee's role?",
            choices: roleList
        },
        // {
        //     type: 'list',
        //     name: 'manager_id',
        //     message: "Who is the employee's manager?",
        //     choices: managerList
        // }
    ],
    manager: (managerList) => [
        {
            type: 'list',
            name: 'manager_id',
            message: "Who is the employee's manager?",
            choices: managerList
        }
    ]
}

module.exports = questions;
