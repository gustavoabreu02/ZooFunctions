const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((value) => value.id === ids[0] || value.id === ids[1]);
}

module.exports = getSpeciesByIds;
