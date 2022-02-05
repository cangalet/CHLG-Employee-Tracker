// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database



        //PromptResponses
const DB = {
        ViewDepartments: async() => {
            const departments = await dbQueryUtil.viewDepartments();
            console.table(departments);
            app();
        },
        ViewRoles: async() => {
            const roles = await dbQueryUtil.viewRoles();
            console.table(roles);
            app();
        },
        ViewEmployees: async() => {
            const employees = await dbQueryUtil.viewEmployees();
            console.table(employees);
            app();
        },
        AddDepartment: async() => {
            const department = await userPrompts.promptAddDepartment();
            await dbQueryUtil.addDepartment(department);
            app();
        },
        // AddRole: async() => {
        //     const role = await userPrompts.promptAddRole();
        //     await dbQueryUtil.addRole(role);
        //     app();
        // },
        // AddEmployee: async() => {
        //     const employee = await userPrompts.promptAddEmployee();
        //     await dbQueryUtil.addEmployee(employee);
        //     app();
        // },
        // UpdateEmployeeRole: async() => {
        //     // const employee = await userPrompts.promptAddEmployee();
        //     // await dbQueryUtil.addEmployee(employee);
        //     // app();
        // },
        Quit(){
            console.log('Exiting application!  Type "npm start" to initialize');
        }   
    }

    promptAddRole(){
        const getDepartments = async(departmentList) => {
            departments = await dbQueryUtil.viewDepartments();
            return departments.map(department => department.name)
        }
        return inquirer.prompt(
            
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
        )}

        // getDepartments = async(departmentList) => {
//     departments = await dbQueryUtil.viewDepartments();
//     return departments.map(department => department.name)
// }

const userPrompts = {
    promptHomeMenu(){
        inquirer.prompt(questions.home)
    },
    promptAddDepartment(){
        return inquirer.prompt(questions.department)
    },
    // promptAddRole(){
    //     const getDepartments = async(departmentList) => {
    //         departments = await dbQueryUtil.viewDepartments();
    //         return departments.map(department => department.name)
    //     }
    //     return inquirer.prompt(
            
    //         {
    //             type: 'input',
    //             name: 'name',
    //             message: 'What is the name of the role?',
    //         },
    //         {
    //             type: 'input',
    //             name: 'salary',
    //             message: 'What is the salary of the role?',
    //         },
    //         {
    //             type: 'list',
    //             name: 'department',
    //             message: 'Which department would you like to add this role to?',
    //             choices: departmentList
    //         }  
    //     )}
}

//PromptResponses
const DB = {
    ViewDepartments: async() => {
        departments = await dbQueryUtil.viewDepartments();
        console.log(departments.map(department => department.name));
        app();
    },

    const userPrompts = {
        promptHomeMenu(){
            return inquirer.prompt(questions.home)
        },
        promptAddDepartment(){
            return inquirer.prompt(questions.department)
        },
        promptAddRole(){
            // departmentList = []
            // getDepartments().then(departmentList => console.log(departmentList))
            getDepartments()
                .then(departmentList => {
                    return inquirer.prompt(questions.role(departmentList))
                })
                .then(answers => console.log(answers.title))
                
            // return inquirer.prompt(questions.role(departmentList))
            // return inquirer.prompt(questions.role(departmentList))
            
        }



        promptAddEmployee(){
            return getRoles()
                .then(getManagers()
                    .then((departmentList, managerList) => console.log(departmentList, managerList)))
            const managerList = getManagers();
            return inquirer.prompt(questions.employee(roleList))  
        }





        promptAddEmployee(){
            return getRoles().then(roleList => inquirer.prompt(questions.employee(roleList)))  
        }

        promptAddEmployee(){
            return getManagers()
                .then(managerList => inquirer.prompt(questions.manager(managerList))) 
        }

        promptAddEmployee(){
            return getRoles()
                .then(roleList => inquirer.prompt(questions.employee(roleList)))
                .then(
                    (answers) => {
                        console.log(answers)
                        return getManagers(answers)
                        .then(managerList => inquirer.prompt(questions.manager(managerList))) 
                    }
                )  
        }

        promptAddEmployee(){
            return getRoles()
                .then(roleList => inquirer.prompt(questions.employee(roleList)))
                .then(answers => {
                    const employeeRole = answers;
                    return getManagers()
                        .then(managerList => inquirer.prompt(questions.manager(managerList)))
                        .then(answers => {
                            const employeeManager = answers;
                            employeeRole.push(employeeManager)
                        })
                })
        }