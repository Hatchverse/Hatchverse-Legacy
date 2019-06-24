const probability = require('../probability/probability.js');

function beginner_egg(message) {
  const egg = new probability({
    p: '100%',
    f: () => {
      
    }
  })
  
  return egg();
}

module.exports.beginner_egg = beginner_egg;