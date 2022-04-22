const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = species.filter((value) => animal === value.name);
  return animais[animais.length - 1].residents.every((value) => value.age > age);
}

module.exports = getAnimalsOlderThan;
