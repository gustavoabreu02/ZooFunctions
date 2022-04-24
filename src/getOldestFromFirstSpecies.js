const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const resultado = employees.find((value) => value.id === id);
  const animal = species.find((value) => value.id === resultado.responsibleFor[0]);
  const idadeAnimal = animal.residents.map((value) => value.age);
  const AnimalVelho = idadeAnimal.reduce((acc, value) => {
    if (acc > value) {
      return acc;
    }
    return value;
  });
  const animalFormato = animal.residents.find((value) => value.age === AnimalVelho);
  return Object.values(animalFormato);
}

module.exports = getOldestFromFirstSpecies;
