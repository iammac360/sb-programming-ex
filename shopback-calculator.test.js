/**
 * ACCEPTANCE TESTS
 */


const exec = require('child-process-promise').exec;

test('Executing shopback-calculator.js signup www.shopback.sg should respond with `Award bonus: 5.00 SGD`', () => {
  expect.assertions(1);

  return exec('node shopback-calculator.js signup www.shopback.sg')
    .then((result) => {
      return expect(result).toEqual('Award bonus: 5.00 SGD')
    }) 
})
