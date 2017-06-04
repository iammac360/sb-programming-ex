const redeem = require('./redeem.action')

describe('redeem(<domain>)', () => {
  describe('when domain is www.shopback.sg', () => {
    it('should return Visit https://www.shopback.sg to start earning cashback!', () => {
      expect(redeem('www.shopback.sg')).toEqual('Visit https://www.shopback.sg to start earning cashback!') 
    }) 
  }) 

  describe('when domain is www.shopback.my', () => {
    it('should return Visit https://www.shopback.my to start earning cashback!', () => {
      expect(redeem('www.shopback.my')).toEqual('Visit https://www.shopback.my to start earning cashback!') 
    }) 
  })

  describe('when domain is www.shopback.co.id', () => {
    it('should return Visit https://www.shopback.co.id to start earning cashback!', () => {
      expect(redeem('www.shopback.co.id')).toEqual('Visit https://www.shopback.co.id to start earning cashback!') 
    }) 
  })

  describe('when domain is www.shopback.com.tw', () => {
    it('should return Visit https://www.shopback.com.tw to start earning cashback!', () => {
      expect(redeem('www.shopback.com.tw')).toEqual('Visit https://www.shopback.com.tw to start earning cashback!') 
    }) 
  })

  describe('when domain is www.shopback.co.th', () => {
    it('should return Visit https://www.shopback.co.th to start earning cashback!', () => {
      expect(redeem('www.shopback.co.th')).toEqual('Visit https://www.shopback.co.th to start earning cashback!') 
    }) 
  })

  describe('when domain is www.shopback.com', () => {
    it('should return Visit https://www.shopback.com to start earning cashback!', () => {
      expect(redeem('www.shopback.com')).toEqual('Visit https://www.shopback.com to start earning cashback!') 
    }) 
  })
  
  describe('when domain is invalid', () => {
    it('should return Invalid domain', () => {
      expect(redeem('someinvaliddomain.no')).toEqual('Invalid domain')
    })
  })
})
