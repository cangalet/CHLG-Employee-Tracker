const {userPrompts} = require('./lib')
const dbQueryUtil = require('./db/dbQueryUtil');
const cTable = require('console.table');

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
    AddRole: async() => {
        const role = await userPrompts.promptAddRole();
        await dbQueryUtil.addRole(role);
        app();
    },
    AddEmployee: async() => {
        const employee = await userPrompts.promptAddEmployee();
        await dbQueryUtil.addEmployee(employee);
        app();
    },
    UpdateEmployeeRole: async() => {
        const employee = await userPrompts.promptUpdateEmployee();
        await dbQueryUtil.updateEmployee(employee);
        app();
    },
    Quit(){
        console.log('Exiting application!  Type "npm start" to initialize');
    }   
}

// Initalize Application
async function app(){
    const {menuChoice}  = await userPrompts.promptHomeMenu();
    if(menuChoice === 'Quit') return;
    console.log(menuChoice.split(' ').join(''))
    DB[menuChoice.split(' ').join('')]();
}
app();