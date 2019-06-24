const probability = require('./probability.js');
const config = require('../config.json');
const fs = module.require("fs")
const { addpet } = require('./addpet.js');

function beginner_egg(message) {
  const beginneregg = new probability({
    p: '5%',
    f: () => {
      message.reply(` <:Beginner_Egg:592440252979871745> you just hatched a Unique **Deer**! (**5%**) <:Deer:592441677700923400>`);
      addpet('<:Deer:592441677700923400>', message.author.id)
    }
  }, {
    p: '10%',
    f: () => {
      message.reply(` <:Beginner_Egg:592440252979871745> you just hatched a Unique **Bear**! (**10%**) <:Bear:592441677436813508>`);
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
  const spottedegg = new probability({
      p: '15%',
      f: () => {
      message.reply(` <:Spotted_Egg:592446342228606976> you just hatched a Rare **Panda**! (**10%**) <:Panda:592446341012258816>`);
      addpet('<:Panda:592446341012258816>', message.author.id)
    }
  }, {
    p: '10%',
    f: () => {
      message.reply(` <:Spotted_Egg:592446342228606976> you just hatched a Unique **Polar Bear**! (**15%**) <:Polar_Bear:592446341158928412>`);
      addpet('<:Polar_Bear:592446341158928412>', message.author.id)
    }
  }, {
    p: '20%',
    f: () => {
      message.reply(` <:Spotted_Egg:592446342228606976> you just hatched a Common **Fox**! (**20%**)  <:Fox:592446341158928385>`);
      addpet('<:Fox:592446341158928385>', message.author.id)
    }
  }, {
    p: '25%',
    f: () => {
      message.reply(` <:Spotted_Egg:592446342228606976> you just hatched a Common **Wolf**! (**25%**) <:Wolf:592446342211698718>`);
      addpet('<:Wolf:592446342211698718>', message.author.id)
    }
  }, {
    p: '30%',
    f: () => {
      message.reply(` <:Spotted_Egg:592446342228606976> you just hatched a Common **Mouse**! (**30%**) <:Mouse:592446341809176606>`);
      addpet('<:Mouse:592446341809176606>', message.author.id)
    }
  })
  
  return spottedegg();
}

module.exports.spotted_egg = spotted_egg;

function ice_shard_egg(message) {
  const iceshardegg = new probability({
      p: '3%',
      f: () => {
      message.reply(` <:Ice_Shard_Egg:592447966023778325> you just hatched an Epic **Ice Dragon**! (**3%**) <:Ice_Dragon:592448891106885633>`);
      addpet('<:Ice_Dragon:592448891106885633>', message.author.id)
    }
  }, {
    p: '12%',
    f: () => {
      message.reply(` <:Ice_Shard_Egg:592447966023778325> you just hatched a Rare **Frost Deer**! (**12%**) <:Frost_Deer:592448890704494593>`);
      addpet('<:Frost_Deer:592448890704494593>', message.author.id)
    }
  }, {
    p: '15%',
    f: () => {
      message.reply(` <:Ice_Shard_Egg:592447966023778325> you just hatched a Unique **Piggy**! (**15%**)  <:Piggy:592448891014742060>`);
      addpet('<:Piggy:592448891014742060>', message.author.id)
    }
  }, {
    p: '20%',
    f: () => {
      message.reply(` <:Ice_Shard_Egg:592447966023778325> you just hatched a Unique **Frost Wolf**! (**20%**) <:Frost_Wolf:592448891497218068>`);
      addpet('<:Frost_Wolf:592448891497218068>', message.author.id)
    }
  }, {
    p: '25%',
    f: () => {
      message.reply(` <:Ice_Shard_Egg:592447966023778325> you just hatched a Common **Cave Bat**! (**25%**) <:Cave_Bat:592448890960216166>`);
      addpet('<:Cave_Bat:592448890960216166>', message.author.id)
    }
  }, {
    p: '25%',
    f: () => {
      
    }
  })
  
  return iceshardegg();
}

module.exports.ice_shard_egg = ice_shard_egg;