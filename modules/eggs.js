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

function slimey_egg(message) {
    const slimeyegg = new probability({
      p: '0.01%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Legendary **Slimey Winged Hydra**! (**0.01%**) <:Slimey_Winged_Hydra:592425496503910400>`);
        addpet('<:Slimey_Winged_Hydra:592425496503910400>', message.author.id)
        addgems(100, message.author.id)
      }
    }, {
      p: '0.04%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Legendary **Slimey Marshmallow**! (**0.04%**) <:Slime_Marshmallow:591832045806813186>`);
        addpet('<:Slime_Marshmallow:591832045806813186>', message.author.id)
        addgems(75)
      }
    }, {
      p: '0.65%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Legendary **Slimey Serpent**! (**0.65%**)  <:Slimey_Serpent:592404097991442433>`);
        addpet('<:Slimey_Serpent:592404097991442433>', message.author.id)
        addgems(50, message.author.id)
      }
    }, {
      p: '3%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Epic **Slimey Winged Horse**! (**3%**) <:Slimey_Winged_Horse:592429327266742279>`);
        addpet('<:Slimey_Winged_Horse:592429327266742279>', message.author.id)
      }
    }, {
      p: '7%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Epic **Slimey T-Rex**! (**7%**) <:Slimey_TRex:592405034046717953>`);
        addpet('<:Slimey_TRex:592405034046717953>', message.author.id)
      }
    }, {
      p: '18%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Rare **Slimey Dragon**! (**18%**) <:Slimey_Dragon:592403899579891733>`);
        addpet('<:Slimey_Dragon:592403899579891733>', message.author.id)
      }
    }, {
      p: '27%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Common **Slimey Wolf**! (**27%**) <:Slimey_Wolf:592407276099338261>`);
        addpet('<:Slimey_Wolf:592407276099338261>', message.author.id)
      }
    }, {
      p: '44.3%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Common **Slimey Kitty**! (**44.3%**) <:Slimey_Kitty:592426380919308299>`);
        addpet('<:Slimey_Kitty:592426380919308299>', message.author.id)
      }
    })
  
  return slimeyegg();
}

module.exports.slimey_egg = slimey_egg;

function rainbow_egg(message) {
    const rainbowegg = new probability({
      p: '0.003%',
      f: () => {
        message.reply(` <:Rainbow_Egg:592425391004844032> you just hatched a Legendary **Rainbow Dogcat**! (**0.003%**) <:Rainbow_Dogcat:592426717285449788>`);
        addpet('<:Rainbow_Dogcat:592426717285449788>', message.author.id)
        addgems(100, message.author.id)
      }
    }, {
      p: '0.04%',
      f: () => {
        message.reply(` <:Rainbow_Egg:592425391004844032> you just hatched a Legendary **Slimey Marshmallow**! (**0.04%**) <:Slime_Marshmallow:591832045806813186>`);
        addpet('<:Slime_Marshmallow:591832045806813186>', message.author.id)
        addgems(75)
      }
    }, {
      p: '0.65%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Legendary **Slimey Serpent**! (**0.65%**)  <:Slimey_Serpent:592404097991442433>`);
        addpet('<:Slimey_Serpent:592404097991442433>', message.author.id)
        addgems(50, message.author.id)
      }
    }, {
      p: '3%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Epic **Slimey Winged Horse**! (**3%**) <:Slimey_Winged_Horse:592429327266742279>`);
        addpet('<:Slimey_Winged_Horse:592429327266742279>', message.author.id)
      }
    }, {
      p: '7%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Epic **Slimey T-Rex**! (**7%**) <:Slimey_TRex:592405034046717953>`);
        addpet('<:Slimey_TRex:592405034046717953>', message.author.id)
      }
    }, {
      p: '18%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Rare **Slimey Dragon**! (**18%**) <:Slimey_Dragon:592403899579891733>`);
        addpet('<:Slimey_Dragon:592403899579891733>', message.author.id)
      }
    }, {
      p: '27%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Common **Slimey Wolf**! (**27%**) <:Slimey_Wolf:592407276099338261>`);
        addpet('<:Slimey_Wolf:592407276099338261>', message.author.id)
      }
    }, {
      p: '44.3%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Common **Slimey Kitty**! (**44.3%**) <:Slimey_Kitty:592426380919308299>`);
        addpet('<:Slimey_Kitty:592426380919308299>', message.author.id)
      }
    })
  
  return rainbowegg();
}

module.exports.rainbow_egg = rainbow_egg;