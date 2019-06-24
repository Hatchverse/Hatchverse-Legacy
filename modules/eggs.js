const probability = require('./probability.js');
const config = require('../config.json');
const fs = module.require("fs")
const { addpet } = require('./addpet.js');
const { addgems } = require('./addgems.js');

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
      addpet('<:Bunny:592441678380400680>', message.author.id)
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
      message.reply(` <:Ice_Shard_Egg:592447966023778325> you just hatched a Common **Frost Kitty**! (**25%**) <:Frost_Kitty:592448891329445888>`);
      addpet('<:Frost_Kitty:592448891329445888>', message.author.id)
    }
  })
  
  return iceshardegg();
}

module.exports.ice_shard_egg = ice_shard_egg;

function spikey_egg(message) {
  const spikeyegg = new probability({
      p: '1%',
      f: () => {
      message.reply(` <:Spikey_Egg:592443923998441475> you just hatched a Legendary **Emerald Golem**! (**1%**) <:Emerald_Golem:592443924526923786>`);
      addpet('<:Emerald_Golem:592443924526923786>', message.author.id)
      addgems(25, message.author.id)
    }
  }, {
    p: '7%',
    f: () => {
      message.reply(` <:Spikey_Egg:592443923998441475> you just hatched an Epic **Dark Dragon**! (**7%**) <:Dark_Dragon:592443923545325587>`);
      addpet('<:Dark_Dragon:592443923545325587>', message.author.id)
    }
  }, {
    p: '12%',
    f: () => {
      message.reply(` <:Spikey_Egg:592443923998441475> you just hatched a Rare **Dragon**! (**12%**)  <:Dragon:592443924291780623>`);
      addpet('<:Dragon:592443924291780623>', message.author.id)
    }
  }, {
    p: '20%',
    f: () => {
      message.reply(` <:Spikey_Egg:592443923998441475> you just hatched a Unique **Ruby Golem**! (**20%**) <:Frost_Wolf:592448891497218068>`);
      addpet('<:Ruby_Golem:592443924111425536>', message.author.id)
    }
  }, {
    p: '30%',
    f: () => {
      message.reply(` <:Spikey_Egg:592443923998441475> you just hatched a Common **Dino**! (**30%**) <:Dino:592443923482411023>`);
      addpet('<:Dino:592443923482411023>', message.author.id)
    }
  }, {
    p: '30%',
    f: () => {
      message.reply(` <:Spikey_Egg:592443923998441475> you just hatched a Common **Golem**! (**30%**) <:Golem:592443924186923008>`);
      addpet('<:Golem:592443924186923008>', message.author.id)
    }
  })
  
  return spikeyegg();
}

module.exports.spikey_egg = spikey_egg;