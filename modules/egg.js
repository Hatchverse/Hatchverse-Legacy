const probability = require('./probability.js');
const config = require('../config.json');
const fs = module.require("fs")
const { addpet } = require('./addpet.js');

function beginner_egg(message) {
  const beginneregg = new probability({
    p: '5%',
    f: () => {
      message.reply(` <:Beginner_Egg:592440252979871745> you just hatched an Unique **Deer**! (**5%**) <:Deer:592441677700923400>`);
      addpet('<:Deer:592441677700923400>', message.author.id)
    }
  }, {
    p: '10%',
    f: () => {
      message.reply(` <:Beginner_Egg:592440252979871745> you just hatched an Unique **Bear**! (**10%**) <:Bear:592441677436813508>`);
      addpet('<:Bear:592441677436813508>', message.author.id)
    }
  }, {
    p: '20%',
    f: () => {
      message.reply(` <:Beginner_Egg:592440252979871745> you just hatched a Common **Bunny**! (**20%**) <:Bunny:592441678380400680>`);
      addpet('<:Bear:592441677436813508>', message.author.id)
    }
  }, {
    p: '25%',
    f: () => {
      message.reply(` <:Beginner_Egg:592440252979871745> you just hatched a Common **Kitty**! (**25%**) <:Kitty:592441678304903178>`);
      addpet('<:Kitty:592441678304903178>', message.author.id)
    }
  }, {
    p: '40%',
    f: () => {
      message.reply(` <:Beginner_Egg:592440252979871745> you just hatched a Common **Doggy**! (**40%**) <:Doggy:592441678200307742>`);
      addpet('<:Doggy:592441678200307742>', message.author.id)
    }
  })
  
  return beginneregg();
}

module.exports.beginner_egg = beginner_egg;

function spotted_egg(message) {
  
}