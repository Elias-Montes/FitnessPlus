const db = require('../config/connection');
const { Cardio, Resistance, User, Sleep, Weight, Goals } = require('../models');

const cardioData = require('./cardioData.json');
const resistanceData = require('./resistanceData.json');
const userData = require('./userData.json');
const sleepData = require('./sleepData.json');
const weightData = require('./weightData.json');
const goalsData = require('./sleepData.json');



db.once('open', async () => {
  try {
    await Cardio.deleteMany({});
    await Resistance.deleteMany({});
    await User.deleteMany({});
    await Sleep.deleteMany({});
    await Weight.deleteMany({});
    await Goals.deleteMany({});

    await Cardio.create({cardioData});
    await Resistance.create({resistanceData});
    await User.create({userData});
    await Sleep.create({sleepData});
    await Weight.create({weightData});
    await Goals.create({goalsData});


    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

