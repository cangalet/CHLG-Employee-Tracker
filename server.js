const {userPrompts, DB} = require('./lib/index')

// third file
async function app(){
    const {menuChoice}  = await userPrompts.promptHomeMenu();
    if(menuChoice === 'Quit') return;
    DB[menuChoice.split(' ').join('')]();
    app();
}
app();