const inquirer = require("inquirer");
const questions = require('./questions')


const userPrompts = {
    promptHomeMenu(){
        return inquirer.prompt(questions.home)
    },
    promptAddDepartment(){
        return inquirer.prompt(questions.department)
    }
}



module.exports = {userPrompts}
