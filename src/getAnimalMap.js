const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  let resultado = {
    NE: ['lions', 'giraffes'],
    NW: ['tigers', 'bears', 'elephants'],
    SE: ['penguins', 'otters'],
    SW: ['frogs', 'snakes'],
  };
  const animaisNE = species.filter((value) => value.location === 'NE');
  const NEA = animaisNE.map((value) => value.name).name;
  if (options.includeNames === true) {
    resultado = { NE: NEA, NW: [], SE: [], SW: [] };
  }
  return resultado;
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
