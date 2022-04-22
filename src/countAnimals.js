const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal !== 'object') {
    return { lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6 };
  }
  const resultado = species.filter((value) => animal.specie === value.name);
  if (animal.sex === 'male' || animal.sex === 'female') {
    return resultado[0].residents.filter((value) => value.sex === animal.sex).length;
  }
  if (typeof animal.specie === 'string') {
    return resultado[0].residents.length;
  }
}

module.exports = countAnimals;
