const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const userDisplay = employees.find((value) => (
    value.firstName === employeeName || value.lastName === employeeName));
  if (typeof userDisplay === 'object') {
    return userDisplay;
  }
  return {};
}

module.exports = getEmployeeByName;
