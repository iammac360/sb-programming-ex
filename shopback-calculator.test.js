/**
 * *****************************
 * | FUNCTION/ACCEPTANCE TESTS |
 * *****************************
 */

const exec = require('child-process-promise').exec;

beforeEach(() => {
  expect.assertions(1);
});

/**
 * ACTION: invalid action
 */
test('Executing `shopback-calculator.js nonexistent-action www.shopback.sg` should respond with `Invalid Action`', () => {

  return exec('node shopback-calculator.js nonexistent-action www.shopback.sg')
    .catch((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Invalid Action')
    }) 
})

/**
 * ACTION: signup 
 */
test('Executing `shopback-calculator.js signup www.shopback.sg` should respond with `Award bonus: 5.00 SGD`', () => {

  return exec('node shopback-calculator.js signup www.shopback.sg')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Award bonus: 5.00 SGD')
    }) 
})

test('Executing `shopback-calculator.js signup www.shopback.my` should respond with `Award bonus: 10.00 MYR`', () => {

  return exec('node shopback-calculator.js signup www.shopback.my')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Award bonus: 10.00 MYR')
    }) 
})


/**
 * ACTION: spend 
 */
test('Executing `shopback-calculator.js spend 0` should respond with `No cashback`', () => {

  return exec('node shopback-calculator.js spend 0')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('No cashback')
    }) 
})

test('Executing `shopback-calculator.js spend 20` should respond with `Award cashback: 3.00`', () => {

  return exec('node shopback-calculator.js spend 20')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Award cashback: 3.00')
    }) 
})

test('Executing `shopback-calculator.js spend 100 5` should respond with `Award cashback: 5.00`', () => {

  return exec('node shopback-calculator.js spend 100 5')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Award cashback: 5.00')
    }) 
})

test('Executing `shopback-calculator.js spend 10 10 10` should respond with `Award cashback: 1.00`', () => {

  return exec('node shopback-calculator.js spend 10 10 10')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Award cashback: 1.00')
    }) 
})

test('Executing `shopback-calculator.js spend 20 10 15` should respond with `Award cashback: 2.00`', () => {

  return exec('node shopback-calculator.js spend 20 10 15')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Award cashback: 2.00')
    }) 
})

/**
 * ACTION: redeem 
 */
test('Executing `shopback-calculator.js redeem www.shopback.sg` should respond with `Visit https://www.shopback.sg to start earning cashback!`', () => {

  return exec('node shopback-calculator.js redeem www.shopback.sg')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Visit https://www.shopback.sg to start earning cashback!')
    })
})

test('Executing `shopback-calculator.js redeem www.shopback.my` should respond with `Visit https://www.shopback.my to start earning cashback!`', () => {

  return exec('node shopback-calculator.js redeem www.shopback.my')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Visit https://www.shopback.my to start earning cashback!')
    })
})

test('Executing `shopback-calculator.js redeem www.shopback.co.id` should respond with `Visit https://www.shopback.co.id to start earning cashback!`', () => {

  return exec('node shopback-calculator.js redeem www.shopback.co.id')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Visit https://www.shopback.co.id to start earning cashback!')
    })
})

test('Executing `shopback-calculator.js redeem www.shopback.com.tw` should respond with `Visit https://www.shopback.com.tw to start earning cashback!`', () => {

  return exec('node shopback-calculator.js redeem www.shopback.com.tw')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Visit https://www.shopback.com.tw to start earning cashback!')
    })
})

test('Executing `shopback-calculator.js redeem www.shopback.co.th` should respond with `Visit https://www.shopback.co.th to start earning cashback!`', () => {

  return exec('node shopback-calculator.js redeem www.shopback.co.th')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Visit https://www.shopback.co.th to start earning cashback!')
    })
})

test('Executing `shopback-calculator.js redeem www.shopback.com` should respond with `Visit https://www.shopback.com to start earning cashback!`', () => {

  return exec('node shopback-calculator.js redeem www.shopback.com')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Visit https://www.shopback.com to start earning cashback!')
    })
})
