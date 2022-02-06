const inquirer = require("inquirer");
const questions = require('./questions')
const dbQueryUtil = require('../db/dbQueryUtil');

// function to return deparments as a list of choice for inquirer prompt
async function getDepartments(){
    departments = await dbQueryUtil.viewDepartments();
    return departments.map(department => {
        const formattedDepartment = {name: department.name, value: department.id}
        return formattedDepartment;
    });
}

// function to return roles as a list of choice for inquirer prompt
async function getRoles(){
    roles = await dbQueryUtil.viewRoles();
    return roles.map(role => {
        const formattedRole = {name: role.title, value: role.id}
        return formattedRole;
    });
}

// function to return managers as a list of choice for inquirer prompt
async function getManagers(){
    managers = await dbQueryUtil.viewManagersList();
    return managers.map(manager => {
        const formattedManager = {name: manager.name, value: manager.value}
        return formattedManager;
    });
}

// function to return employees as a list of choice for inquirer prompt
async function getEmployees(){
    employees = await dbQueryUtil.viewEmployeesList();
    return employees.map(employee => {
        const formattedEmployee = {name: employee.name, value: employee.value}
        return formattedEmployee;
    })
}

// prompts users questions then returns results
const userPrompts = {
    promptHomeMenu(){
        return inquirer.prompt(questions.home)
    },
    promptAddDepartment(){
        return inquirer.prompt(questions.department)
    },
    promptAddRole(){
        return getDepartments()
            .then(departmentList => inquirer.prompt(questions.role(departmentList)))    
    },
    promptAddEmployee(){
        return getRoles()
            .then(roleList => inquirer.prompt(questions.employee(roleList)))
            .then(async (answers) => {
                const employeeRole = answers;
                return await getManagers()
                    .then(managerList => inquirer.prompt(questions.manager(managerList)))
                    .then(answers => {
                        const employeeManager = answers;
                        employeeRole.manager_id = employeeManager.manager_id;
                        return employeeRole;
                    })
            })
    },
    promptUpdateEmployee(){
        return getEmployees()
            .then(employeeList => inquirer.prompt(questions.updateEmployee(employeeList)))
            .then(async (answers) => {
                const employeeName =answers;
                return await getRoles()
                    .then(roleList => inquirer.prompt(questions.newRole(roleList)))
                    .then(answers => {
                        const employeeNewRole = answers;
                        employeeName.role_id = employeeNewRole.role_id;
                        return employeeName;
                    })
            })
    }
}
module.exports = {userPrompts}
