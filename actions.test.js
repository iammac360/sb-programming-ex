const Actions = require('./actions')

describe('signUp(<domain>)', () => {
  describe('when domain is www.shopback.sg', () => {
    it('should return 5.00 SGD', () => {
      expect(Actions.signUp('www.shopback.sg')).toEqual('5.00 SGD')
    })
  })

  describe('when domain is www.shopback.my', () => {
    it('should return 10.00 MYR', () => {
      expect(Actions.signUp('www.shopback.my')).toEqual('10.00 MYR')
    })
  })

  describe('when domain is www.shopback.co.id', () => {
    it('should return 25.00 IDR', () => {
      expect(Actions.signUp('www.shopback.co.id')).toEqual('25.00 IDR')
    })
  })

  describe('when domain is www.shopback.com.tw', () => {
    it('should return 1000.00 TWD', () => {
      expect(Actions.signUp('www.shopback.com.tw')).toEqual('1000.00 TWD')
    })
  })

  describe('when domain is www.shopback.co.th', () => {
    it('should return 500.00 THB', () => {
      expect(Actions.signUp('www.shopback.co.th')).toEqual('500.00 THB')
    })
  })

  describe('when domain is www.shopback.com', () => {
    it('should return 5.00 USD', () => {
      expect(Actions.signUp('www.shopback.com')).toEqual('5.00 USD')
    })
  })
})
