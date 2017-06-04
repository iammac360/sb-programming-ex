/**
* redeem() returns the url to direct user to visit corresponding website
* based on domain
*
* @param String domain
* @return String
*/
function redeem(domain) {
  switch(domain) {
    case 'www.shopback.sg':
      return 'Visit https://www.shopback.sg to start earning cashback!'
    case 'www.shopback.my':
      return 'Visit https://www.shopback.my to start earning cashback!'
    case 'www.shopback.co.id':
      return 'Visit https://www.shopback.co.id to start earning cashback!'
    case 'www.shopback.com.tw':
      return 'Visit https://www.shopback.com.tw to start earning cashback!'
    case 'www.shopback.co.th':
      return 'Visit https://www.shopback.co.th to start earning cashback!'
    case 'www.shopback.com':
      return 'Visit https://www.shopback.com to start earning cashback!'
    default:
      return 'Invalid domain'
  }
}

module.exports = redeem
