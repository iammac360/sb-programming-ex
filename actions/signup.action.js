/**
* signUp() returns the corresposing award bonus for a certain currency
* based on domain
*
* @param String domain
* @return String
*/
function signUp(domain) {
  switch(Array.isArray(domain) ? domain[0] : domain) {
    case 'www.shopback.sg':
      return 'Award bonus: 5.00 SGD'
    case 'www.shopback.my':
      return 'Award bonus: 10.00 MYR'
    case 'www.shopback.co.id':
      return 'Award bonus: 25.00 IDR'
    case 'www.shopback.com.tw':
      return 'Award bonus: 1000.00 TWD'
    case 'www.shopback.co.th':
      return 'Award bonus: 500.00 THB'
    case 'www.shopback.com':
      return 'Award bonus: 5.00 USD'
    default:
      return 'Invalid domain'
  }
}

module.exports = signUp
