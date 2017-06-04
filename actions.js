module.exports = {
  signUp
}


/**
* signUp() returns the corresposing award bonus for a certain currency
* based on domain
*
* @param String domain
* @return String
*/
function signUp(domain) {
  switch(domain) {
    case 'www.shopback.sg':
      return '5.00 SGD'
    case 'www.shopback.my':
      return '10.00 MYR'
    case 'www.shopback.co.id':
      return '25.00 IDR'
    case 'www.shopback.com.tw':
      return '1000.00 TWD'
    case 'www.shopback.co.th':
      return '500.00 THB'
    case 'www.shopback.com':
      return '5.00 USD'
    default:
      return 'Invalid domain'
  }
}
