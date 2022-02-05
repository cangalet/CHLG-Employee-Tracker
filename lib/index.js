const inquirer = require("inquirer");
const questions = require('./questions')
const dbQueryUtil = require('../db/dbQueryUtil');

async function getDepartments(){
    departments = await dbQueryUtil.viewDepartments();
    return departments.map(department => {
        const formattedDepartment = {name: department.name, value: department.id}
        return formattedDepartment;
    });  
}

async function getRoles(){
    roles = await dbQueryUtil.viewRoles();
    return roles.map(role => {
        const formattedRole = {name: role.title, value: role.id}
        console.log(formattedRole)
        return formattedRole;
    });  
}

async function getManagers(){
    managers = await dbQueryUtil.viewManagers();
    return managers.map(manager => {
        const formattedManager = {name: manager.name, value: manager.value}
        console.log(formattedManager)
        return formattedManager;
    });  
}

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
                console.log(employeeRole)
                return await getManagers()
                    .then(managerList => inquirer.prompt(questions.manager(managerList)))
                    .then(answers => {
                        const employeeManager = answers;
                        employeeRole.manager_id = employeeManager.manager_id;
                        console.log('new employee role is:', employeeRole)
                        return employeeRole;
                    })
            })
    }
}
module.exports = {userPrompts}
