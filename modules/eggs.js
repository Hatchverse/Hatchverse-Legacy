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
      addgems(30, message.author.id)
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
      message.reply(` <:Spikey_Egg:592443923998441475> you just hatched a Unique **Ruby Golem**! (**20%**) <:Ruby_Golem:592443924111425536>`);
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
        addgems(3000, message.author.id)
      }
    }, {
      p: '0.04%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Legendary **Slimey Marshmallow**! (**0.04%**) <:Slimey_Marshmallow:591832045806813186>`);
        addpet('<:Slimey_Marshmallow:591832045806813186>', message.author.id)
        addgems(750, message.author.id)
      }
    }, {
      p: '0.65%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Legendary **Slimey Serpent**! (**0.65%**)  <:Slimey_Serpent:592404097991442433>`);
        addpet('<:Slimey_Serpent:592404097991442433>', message.author.id)
        addgems(46, message.author.id)
      }
    }, {
      p: '3%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched an Epic **Slimey Winged Horse**! (**3%**) <:Slimey_Winged_Horse:592429327266742279>`);
        addpet('<:Slimey_Winged_Horse:592429327266742279>', message.author.id)
      }
    }, {
      p: '7%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched an Epic **Slimey T-Rex**! (**7%**) <:Slimey_TRex:592405034046717953>`);
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
        message.reply(` <:Rainbow_Egg:592425391004844032> you just hatched a Secret **Rainbow Dogcat**! (**0.003%**) <:Rainbow_Dogcat:592426717285449788>`);
        addpet('<:Rainbow_Dogcat:592426717285449788>', message.author.id)
        addgems(10000, message.author.id)
      }
    }, {
      p: '0.01%',
      f: () => {
        message.reply(` <:Rainbow_Egg:592425391004844032> you just hatched a Legendary **Pixie**! (**0.01%**)  <:Pixie:592425899517804554>`);
        addpet('<:Pixie:592425899517804554>', message.author.id)
        addgems(3000, message.author.id)
      }
    }, {
      p: '0.03%',
      f: () => {
        message.reply(` <:Rainbow_Egg:592425391004844032> you just hatched a Legendary **Rainbow Serpent**! (**0.03%**)  <:Rainbow_Serpent:592426094607728661>`);
        addpet('<:Rainbow_Serpent:592426094607728661>', message.author.id)
        addgems(1000, message.author.id)
      }
    }, {
      p: '5%',
      f: () => {
        message.reply(` <:Rainbow_Egg:592425391004844032> you just hatched an Epic **Rainbow Hybrid**! (**5%**) <:Rainbow_Hybrid:592428298735452169>`);
        addpet('<:Rainbow_Hybrid:592428298735452169>', message.author.id)
      }
    }, {
      p: '19%',
      f: () => {
        message.reply(` <:Rainbow_Egg:592425391004844032> you just hatched a Rare **Rainbow Pegasus**! (**19%**) <:Rainbow_Pegasus:592428298978721822>`);
        addpet('<:Rainbow_Pegasus:592428298978721822>', message.author.id)
      }
    }, {
      p: '31.043%',
      f: () => {
        message.reply(` <:Rainbow_Egg:592425391004844032> you just hatched a Unique **Rainbow Dragon**! (**31.043%**) <:Rainbow_Dragon:592428298940841985>`);
        addpet('<:Rainbow_Dragon:592428298940841985>', message.author.id)
      }
    }, {
      p: '44.914%',
      f: () => {
        message.reply(` <:Rainbow_Egg:592425391004844032> you just hatched a Common **Rainbow Butterfly**! (**44.914%**) <:Rainbow_Butterfly:592428298894573589>`);
        addpet('<:Rainbow_Butterfly:592428298894573589>', message.author.id)
      }
    })
  
  return rainbowegg();
}

module.exports.rainbow_egg = rainbow_egg;

//New Egg Here

function golden_egg(message) {
    const goldenegg = new probability({
      p: '0.01%',
      f: () => {
        message.reply(` <:Golden_Egg:595503216830185493> you just hatched a Legendary **Golden Pegasus**! (**0.01%**) <:Golden_Pegasus:595809862496157698>`);
        addpet('<:Golden_Pegasus:595809862496157698>', message.author.id)
        addgems(3000, message.author.id)
      }
    }, {
      p: '0.02%',
      f: () => {
        message.reply(` <:Golden_Egg:595503216830185493> you just hatched a Legendary **Golden Hybrid**! (**0.02%**)  <:Golden_Hybrid:595809863192412186>`);
        addpet('<:Golden_Hybrid:595809863192412186>', message.author.id)
        addgems(1500, message.author.id)
      }
    }, {
      p: '0.1%',
      f: () => {
        message.reply(` <:Golden_Egg:595503216830185493> you just hatched a Legendary **Golden Marshmallow**! (**0.03%**)  <:Golden_Marshmallow:595809862705872946>`);
        addpet('<:Golden_Marshmallow:595809862705872946>', message.author.id)
        addgems(300, message.author.id)
      }
    }, {
      p: '6%',
      f: () => {
        message.reply(` <:Golden_Egg:595503216830185493> you just hatched an Epic **Golden Dragon**! (**6%**) <:Golden_Dragon:595809862131253269>`);
        addpet('<:Golden_Dragon:595809862131253269>', message.author.id)
      }
    }, {
      p: '14%',
      f: () => {
        message.reply(` <:Golden_Egg:595503216830185493> you just hatched an Epic **Golden Butterfly**! (**14%**)<:Golden_Butterfly:595809862399688714>`);
        addpet('<:Golden_Butterfly:595809862399688714>', message.author.id)
      }
    }, {
      p: '22%',
      f: () => {
        message.reply(` <:Golden_Egg:595503216830185493> you just hatched a Rare **Golden Bull**! (**22%**) <:Golden_Bull:595809862537969665>`);
        addpet('<:Golden_Bull:595809862537969665>', message.author.id)
      }
    }, {
      p: '28%',
      f: () => {
        message.reply(` <:Golden_Egg:595503216830185493> you just hatched a Common **Golden Kitty**! (**28%**) <:Golden_Kitty:595809863263846410>`);
        addpet('<:Golden_Kitty:595809863263846410>', message.author.id)
      }
    }, {
      p: '29.87%',
      f: () => {
        message.reply(` <:Golden_Egg:595503216830185493> you just hatched a Common **Golden Doggy**! (**29.87%**) <:Golden_Doggy:595809862957531149>`);
        addpet('<:Golden_Doggy:595809862957531149>', message.author.id)
      }
    })
  
  return goldenegg();
}

module.exports.golden_egg = golden_egg;

function dominus_egg(message) {
    const dominusegg = new probability({
      p: '0.005%',
      f: () => {
        message.reply(` <:Dominus_Egg:596175646862999574> you just hatched a Secret **Aureus**! (**0.005%**) <:Aureus:596175652743544852>`);
        addpet('<:Aureus:596175652743544852>', message.author.id)
        addgems(6000, message.author.id)
      }
    }, {
      p: '0.01%',
      f: () => {
        message.reply(` <:Dominus_Egg:596175646862999574> you just hatched a Legendary **Dominus Hydra**! (**0.01%**)  <:Dominus_Hydra:596175654181928961>`);
        addpet('<:Dominus_Hydra:596175654181928961>', message.author.id)
        addgems(3000, message.author.id)
      }
    }, {
      p: '0.02%',
      f: () => {
        message.reply(` <:Dominus_Egg:596175646862999574> you just hatched a Legendary **Frost Dominus**! (**0.02%**)  <:Frost_Dominus:596175652269588500>`);
        addpet('<:Frost_Dominus:596175652269588500>', message.author.id)
        addgems(1500, message.author.id)
      }
    }, {
      p: '8%',
      f: () => {
        message.reply(` <:Dominus_Egg:596175646862999574> you just hatched an Epic **Demonic Dominus**! (**8%**) <:Demonic_Dominus:596175652122656777>`);
        addpet('<:Demonic_Dominus:596175652122656777>', message.author.id)
      }
    }, {
      p: '14%',
      f: () => {
        message.reply(` <:Dominus_Egg:596175646862999574> you just hatched an Epic **Angelic Dominus**! (**14%**) <:Angelic_Dominus:596175647743672351>`);
        addpet('<:Angelic_Dominus:596175647743672351>', message.author.id)
      }
    }, {
      p: '21%',
      f: () => {
        message.reply(` <:Dominus_Egg:596175646862999574> you just hatched a Rare **Gloomy Dominus**! (**21%**) <:Gloomy_Dominus:596175652001021972>`);
        addpet('<:Gloomy_Dominus:596175652001021972>', message.author.id)
      }
    }, {
      p: '25%',
      f: () => {
        message.reply(` <:Dominus_Egg:596175646862999574> you just hatched a Unique **Grape Dominus**! (**25%**) <:Grape_Dominus:596175651724197899>`);
        addpet('<:Grape_Dominus:596175651724197899>', message.author.id)
      }
    }, {
      p: '31.965%',
      f: () => {
        message.reply(` <:Dominus_Egg:596175646862999574> you just hatched a Common **Orange Dominus**! (**44.914%**)  <:Orange_Dominus:596175651988439050>`);
        addpet(' <:Orange_Dominus:596175651988439050>', message.author.id)
      }
    })
  
  return dominusegg();
}

module.exports.dominus_egg = dominus_egg;


//Special Eggs
function tester_egg(message) {
    const testeregg = new probability({
      p: '100%',
      f: () => {
        message.reply(` <:Tester_Egg:594196230503137280> you just hatched a Legendary **Hatchverse TV**! (**100%**) <:Hatchverse_TV:594021935688450058>`);
        addpet('<:Hatchverse_TV:594021935688450058>', message.author.id)
      }
    })
  
  return testeregg();
}

module.exports.tester_egg = tester_egg;

//Event Eggs