const customersController = require('./customers/customers.controller')

module.exports =  [
  { path: '/api/customers/{id?}', method: 'GET', config: customersController.getConfig },
  { path: '/api/loadMockCustomers', method: 'GET', config: customersController.loadMockConfig },
  { path: '/api/clearAllCustomers', method: 'GET', config: customersController.clearAllData }
];