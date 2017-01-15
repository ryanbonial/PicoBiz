const db = require('./../database');
const mockCustomers = require('./mock-customers.json');

module.exports.getAll = () => db.customerDb.data;

module.exports.get = id => db.customerDb.get(id);

module.exports.create = newCustomer => {
  mockCustomers.push(newCustomer);
  return newCustomer;
};

module.exports.loadMockData = () => db.customerDb.insert(mockCustomers);