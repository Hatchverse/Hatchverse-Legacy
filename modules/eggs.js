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
        addgems(100, message.author.id)
      }
    }, {
      p: '0.04%',
      f: () => {
        message.reply(` <:SlimeyEgg:592424933217271809> you just hatched a Legendary **Slimey Marshmallow**! (**0.04%**) <:Slimey_Marshmallow:591832045806813186>`);
        addpet('<:Slimey_Marshmallow:591832045806813186>', message.author.id)
        addgems(75, message.author.id)
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
        addgems(200, message.author.id)
      }
    }, {
      p: '0.01%',
      f: () => {
        message.reply(` <:Rainbow_Egg:592425391004844032> you just hatched a Legendary **Pixie**! (**0.01%**)  <:Pixie:592425899517804554>`);
        addpet(' <:Pixie:592425899517804554>', message.author.id)
        addgems(100, message.author.id)
      }
    }, {
      p: '0.03%',
      f: () => {
        message.reply(` <:Rainbow_Egg:592425391004844032> you just hatched a Legendary **Rainbow Serpent**! (**0.03%**)  <:Rainbow_Serpent:592426094607728661>`);
        addpet('<:Rainbow_Serpent:592426094607728661>', message.author.id)
        addgems(75, message.author.id)
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
function hack_week_egg(message) {
    const hackweekegg = new probability({
      p: '0.001%',
      f: () => {
        message.reply(` <:HackWeekEgg:591827213570277385> you just hatched a Discord **Wumpus**! (**0.001%**) <:Wumpus:593533855458263040>`);
        addpet('<:Wumpus:593533855458263040>', message.author.id)
        addgems(300, message.author.id)
      }
    }, {
      p: '0.004%',
      f: () => {
        message.reply(` <:HackWeekEgg:591827213570277385> you just hatched a Secret **Blurple Doggy**! (**0.004%**) <:Blurple_Doggy:591827146649894913>`);
        addpet('<:Blurple_Doggy:591827146649894913>', message.author.id)
        addgems(200, message.author.id)
      }
    }, {
      p: '0.01%',
      f: () => {
        message.reply(` <:HackWeekEgg:591827213570277385> you just hatched a Legendary **Hacked Overlord**! (**0.01%**) <:Hacked_Overlord:591827107051733013>`);
        addpet('<:Hacked_Overlord:591827107051733013>', message.author.id)
        addgems(100, message.author.id)
      }
    }, {
      p: '0.01%',
      f: () => {
        message.reply(` <:HackWeekEgg:591827213570277385> you just hatched a Legendary **Hacked Robot**! (**0.01%**)  <:Hacked_Robot:591830206382342144>`);
        addpet('<:Hacked_Robot:591830206382342144>', message.author.id)
        addgems(75, message.author.id)
      }
    }, {
      p: '2%',
      f: () => {
        message.reply(` <:HackWeekEgg:591827213570277385> you just hatched an Epic **Hacked Phoenix**! (**2%**) <:Hacked_Phoenix:591829973996797977>`);
        addpet('<:Hacked_Phoenix:591829973996797977>', message.author.id)
      }
    }, {
      p: '10%',
      f: () => {
        message.reply(` <:HackWeekEgg:591827213570277385> you just hatched a Rare **Hacked Angel**! (**10%**) <:Hacked_Angel:591836197723045898>`);
        addpet('<:Hacked_Angel:591836197723045898>', message.author.id)
      }
    }, {
      p: '15.772%',
      f: () => {
        message.reply(` <:HackWeekEgg:591827213570277385> you just hatched a Unique **Hacked Bear**! (**15.772%**) <:Hacked_Bear:591839436434571264>`);
        addpet('<:Hacked_Bear:591839436434571264>', message.author.id)
      }
    }, {
      p: '30%',
      f: () => {
        message.reply(` <:HackWeekEgg:591827213570277385> you just hatched a Common **Hacked Mouse**! (**30%**) <:Hacked_Mouse:591844476826419212>`);
        addpet('<:Hacked_Mouse:591844476826419212>', message.author.id)
      }
    }, {
      p: '42.113%',
      f: () => {
        message.reply(` <:HackWeekEgg:591827213570277385> you just hatched a Common **Hacked Bunny**! (**42.113%**) <:Hacked_Bunny:591833301669642241>`);
        addpet('<:Hacked_Bunny:591833301669642241>', message.author.id)
      }
    })
  
  return hackweekegg();
}

module.exports.hack_week_egg = hack_week_egg;