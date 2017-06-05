const signUp = require('./signup.action')

describe('signUp(<domain>)', () => {
  describe('when domain is www.shopback.sg', () => {
    it('should return Award bonus: 5.00 SGD', () => {
      expect(signUp('www.shopback.sg')).toEqual('Award bonus: 5.00 SGD') }) 
  }) 

  describe('when domain is www.shopback.my', () => {
    it('should return Award bonus: 10.00 MYR', () => {
      expect(signUp('www.shopback.my')).toEqual('Award bonus: 10.00 MYR')
    })
  })

  describe('when domain is www.shopback.co.id', () => {
    it('should return Award bonus: 25.00 IDR', () => {
      expect(signUp('www.shopback.co.id')).toEqual('Award bonus: 25.00 IDR')
    })
  })

  describe('when domain is www.shopback.com.tw', () => {
    it('should return Award bonus: 1000.00 TWD', () => {
      expect(signUp('www.shopback.com.tw')).toEqual('Award bonus: 1000.00 TWD')
    })
  })

  describe('when domain is www.shopback.co.th', () => {
    it('should return Award bonus: 500.00 THB', () => {
      expect(signUp('www.shopback.co.th')).toEqual('Award bonus: 500.00 THB')
    })
  })

  describe('when domain is www.shopback.com', () => {
    it('should return Award bonus: 5.00 USD', () => {
      expect(signUp('www.shopback.com')).toEqual('Award bonus: 5.00 USD')
    })
  })
  
  describe('when domain is invalid', () => {
    it('should return Invalid domain', () => {
      expect(signUp('someinvaliddomain.no')).toEqual('Invalid domain')
    })
  })

  describe('when domain is an array of strings', () => {
    it('should return valid response', () => {
      expect(signUp(['www.shopback.com'])).toEqual('Award bonus: 5.00 USD')
    })
  })
})
