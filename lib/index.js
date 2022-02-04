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
        return getDepartments()
            .then(departmentList => inquirer.prompt(questions.role(departmentList)))
            // .then(answers => console.log(answers.title))
        // return inquirer.prompt(questions.role(departmentList))
        // return inquirer.prompt(questions.role(departmentList))
        
    }
}
module.exports = {userPrompts}
