const process = require('process')

// Get the action
const action = process.argv[2]

// Get the action arguments
const actionArgs = process.argv.filter((v, i) => i >= 3)

// import shopback calculator actions
const Actions = require('./actions')

// Map and validate actions
switch(action) {
  case 'signup':
    console.log(Actions.signUp(actionArgs[0]))
    break
  case 'spend':
    console.log(Actions.spend(actionArgs))
    break
  case 'redeem':
    console.log(Actions.redeem(actionArgs[0]))
    break
  default:
    console.log('Invalid Action')

    // To indicate failure to shell with exit code 1
    process.exit(1)
}
