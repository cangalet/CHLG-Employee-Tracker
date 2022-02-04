const {userPrompts} = require('./lib')
const dbQueryUtil = require('./db/dbQueryUtil');
const cTable = require('console.table');

//PromptResponses
const DB = {
    ViewDepartments: async() => {
        departments = await dbQueryUtil.viewDepartments();
        console.table(departments);
        app();
    },
    ViewRoles: async() => {
        roles = await dbQueryUtil.viewRoles();
        console.table(roles);
        app();
    },
    ViewEmployees: async() => {
        employees = await dbQueryUtil.viewEmployees();
        console.table(employees);
        app();
    },
    AddDepartment: async() => {
        department = await userPrompts.promptAddDepartment();
        await dbQueryUtil.addDepartment(department);
        app();
    },
    AddRole: async() => {
        const role = await userPrompts.promptAddRole();
        console.log(role)
        await dbQueryUtil.addRole(role);
        app();
    },
    // AddEmployee: async() => {
    //     employee = await userPrompts.promptAddEmployee();
    //     await dbQueryUtil.addEmployee(employee);
    //     app();
    // },
    // UpdateEmployeeRole: async() => {
    //     employee = await userPrompts.promptAddEmployee();
    //     await dbQueryUtil.addEmployee(employee);
    //     app();
    // },
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