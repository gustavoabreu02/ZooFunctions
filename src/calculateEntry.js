const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const resultado = { adult: 0, child: 0, senior: 0 };
  if (entrants === {}) {
    return 0;
  }
  entrants.forEach((value) => {
    if (value.age < 18) {
      resultado.child = 1 + resultado.child;
    } else if (value.age >= 50) {
      resultado.senior = 1 + resultado.senior;
    } else if (value.age >= 18) {
      resultado.adult = 1 + resultado.adult;
    }
  });
  return resultado;
}

function calculateEntry(entrants) {
  if (typeof entrants !== 'object') {
    return 0;
  }
  if (entrants.length === undefined) {
    return 0;
  }
  const resultado = 0;
  const adult = prices.adult * countEntrants(entrants).adult;
  const child = prices.child * countEntrants(entrants).child;
  const senior = prices.senior * countEntrants(entrants).senior;
  return resultado + adult + senior + child;
}

module.exports = { calculateEntry, countEntrants };
