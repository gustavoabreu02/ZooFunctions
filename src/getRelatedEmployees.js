const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  if (id === stephanieId || id === olaId || id === burlId) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  try {
    if (isManager(managerId) === false) {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    }
    if (isManager(managerId) === true) {
      const func = employees.filter((value) => value.managers[0] === managerId);
      return func.map((value) => `${value.firstName} ${value.lastName}`);
    }
  } catch (error) {
    throw error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
