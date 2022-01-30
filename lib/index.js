const inquirer = require("inquirer");
//one file
const userPrompts = {
    promptHomeMenu(){
        return inquirer.prompt([{
            type: 'list',
            name: 'menuChoice',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'View All Departments', 'View All Managers', 'Quit'],
        }])
      }
}

//anotherFile
const DB = {
    ViewAllEmployees(){
        console.log('John, Merry, Ivanushka');
    },
    ViewAllDepartments(){
        console.log('Sales, Cafeteria, Golf Course');
    },
    Quit(){
        console.log('thanks For Playing');
    },
    ViewAllManagers(){
        console.log('Managers')
    }
}

module.exports = {userPrompts, DB}
