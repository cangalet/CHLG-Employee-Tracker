const inquirer = require("inquirer");
const questions = require('./questions')
const dbQueryUtil = require('../db/dbQueryUtil');


async function getDepartments(){
    departments = await dbQueryUtil.viewDepartments();
    return departments.map(department => department.name);
    
}

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
            .then(departmentList => inquirer.prompt(questions.role(departmentList)))
            .then(answers => console.log(answers))
        // return inquirer.prompt(questions.role(departmentList))
        // return inquirer.prompt(questions.role(departmentList))
        return;
    }
}
module.exports = {userPrompts}
