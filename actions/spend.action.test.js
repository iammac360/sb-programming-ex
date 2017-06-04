const spend = require('./spend.action')

describe('spend([<amounts>])', () => {
  describe('when amounts is [0]', () => {
    it('should return No cashback', () => {
      expect(spend([0])).toEqual('No cashback')
    })
  })

  describe('when amounts is [20]', () => {
    it('should return Award cashback: 3.00', () => {
      expect(spend([20])).toEqual('Award cashback: 3.00')
    })
  })

  describe('when amounts is [100, 5]', () => {
    it('should return Award cashback: 5.00', () => {
      expect(spend([100, 5])).toEqual('Award cashback: 5.00')
    })
  })

  describe('when amounts is [10, 10, 10]', () => {
    it('should return Award cashback: 1.00', () => {
      expect(spend([10, 10, 10])).toEqual('Award cashback: 1.00')
    })
  })

  describe('when amounts is [20, 10, 15]', () => {
    it('should return Award cashback: 2.00', () => {
      expect(spend([20, 10, 15])).toEqual('Award cashback: 2.00')
    })
  })

  describe('when amounts is [1000.54, 12.32, 43.55]', () => {
    it('should return Award cashback: 101.00', () => {
      expect(spend([1000.54, 12.32, 43.55])).toEqual('Award cashback: 101.00')
    })
  })

  describe('when amounts is invalid', () => {
    it('should return `Invalid type in amounts array. Value must be numeric.`', () => {
      expect(spend([1, 'testing'])).toEqual(`Invalid type in amounts array. Value must be numeric.`)
    })
  })
})
