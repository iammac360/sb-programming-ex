# Shopback Forex Design Proposal


## Overview of the problem

In ShopBack, we deal with commissions and cashbacks in a mix of currencies on a daily basis. The following scenario is a common occurrence.
ShopBack Customer pays merchant for products in currency X ShopBack receives commission of purchase in currency Y ShopBack awards cashback to Customer in currency Z
Due to the highly volatile nature of exchange rates and how it now makes a significant difference in revenue due to the volume of transactions ShopBack is tracking, the management has decided that we now need to automate the updating of exchange rates.
An existing engine that tracks and update all customer transactions within the past 6 months will be using this.
Your job is to design a solution that will address the following concerns:

1. Exchange rate used for each transaction must be of a fresh rate updated within 24 hours before the transaction date (i.e. the date of purchase)
2. Throughput of existing engine utilizing the new exchange rates must not be reduced by more than 1%. 
3. Fault tolerant

## Solution

![Shopback Forex Diagram Problem1](https://www.dropbox.com/s/mg8k8mlmy7t01vp/ShopbackEx1.jpg?dl=0&raw=1)

My proposed solution utilizes a Service Oriented Architecture approach which are separated to a 2 services.

1. **RateUpdaterService** - This service fetches the new rates from the external rates provider like 
  [OpenExchange.org](https://openexchangerates.org/api/latest.json) and stores the new rates on the Rates Database. 
  It is being triggered by a Cron Job that runs every N minute(Default is 60 minutes) every day. 
  This can be on a single dedicated server instance since its only task is just to update the rates on the database 
  but it can also have a mirror instance if somethings goes wrong.

2. **RateConvertionService** - This service provides the updated rates to be used by other ShopBack services like Payment Service, Commision Service, Cashback Service etc.
   I'm thinking of having a REST or RPC interface for this service because it is easy to implement and doesn't have that much endpoints to be implemented.

   Sample endpoint for rate convertion:

   * Convert amount from USD to SGD `GET /convert_rate?amount=100&from_currency=USD&to_currency=SGD`

      Sample Response:

       ```
        {
          "amount": "100.00",
          "from": {
            "amount": "100.00",
            "currency": "USD"
          },
          "to": [{
            "amount": "138.07",
            "currency": "SGD",
            "current_rate": "1.38 USD"
          }]
        }
       ```

   * Get all convertions from USD to SGD `GET /convert_rate?amount=100&from_currency=USD`

      Sample Response:

       ```
        {
          "amount": "100.00",
          "from": {
            "amount": "100.00",
            "currency": "USD"
          },
          "to": [{
            "amount": "138.07",
            "currency": "SGD",
            "current_rate": "1.38 SGD"
          }, {
            "amount": "1329500.00",
            "currency": "IDR",
            "current_rate": "13295.00 IDR"
          }, {
            "amount": "426.00",
            "currency": "MYR",
            "current_rate": "4.26 MYR"
          }, {
            "amount": "301.10",
            "currency": "TWD",
            "current_rate": "30.11 TWD"
          }]
          "udpated_at": "2017-06-04T18:25:43-05:00"
        }
       ```

   * Convert amount from USD to SGD and TWD`GET /convert_rate?amount=100&from_currency=USD&to_currency=SGD,TWD`

      Sample Response:

       ```
        {
          "amount": "100.00",
          "from": {
            "amount": "100.00",
            "currency": "USD"
          },
          "to": [{
            "amount": "138.07",
            "currency": "SGD",
            "current_rate": "1.38 SGD"
          }, {
            "amount": "301.10",
            "currency": "TWD",
            "current_rate": "30.11 TWD"
          }],
          "udpated_at": "2017-06-04T18:25:43-05:00"
        }
       ```

    I'm also considering other interfaces like Apache Thrift, Protobuf, JSON RPC but I haven't got any expertise on these tools.

Now, for the system to be fault tolerant, I'm thinking that the `RateConvertionService` should have an elastic auto scaling mechanism in case 
that the server load cannot handle it and it will spawn a new instance to cater the load. When the server load lessens, it must revert back or reduce the
number of instances of the server.

It should also consider the implementation of each services should have a good test coverage and refactored very well 
to make sure that the server usage is efficient.

Regarding the security, the services are only accessible within the Shopbacks internal network or VPC and only to be used by other Shopback services.
If it is needed to be accessed or used publicly, it should have a public proxy service that requires an access token to be used.
