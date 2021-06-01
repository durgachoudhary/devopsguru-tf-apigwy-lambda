'use strict'
//https://quileswest.medium.com/deploying-aws-lambda-api-gateway-using-terraform-modules-fe2cf6aeafea
exports.handler = function (event, context, callback) {
  var response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: '<h2>This is our Lambda...API Gateway...and...Terraform lab.</h2>',
  }
  callback(null, response)
}