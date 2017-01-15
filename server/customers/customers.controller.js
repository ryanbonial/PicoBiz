const Joi = require('joi');
const customerDb = require('./customers.js');

let customersController = {};
let customers = [];

customersController.getConfig = {
  handler: function(req, reply) {
    if (req.params.id) {
      const foundCustomer = customerDb.get(req.params.id);
      if (foundCustomer === null) return reply('Customer not found.').code(404);
      return reply(foundCustomer);
    }
    reply(customerDb.getAll());
  }
};

customersController.loadMockConfig = {
  handler: function(req, reply) {
    customerDb.loadMockData();
    return reply({success: true});
  }
};

module.exports = customersController;
