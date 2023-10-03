const db = require('../config/connection');
const { Cardio, Resistance, User } = require('../models');

const cardioData = require('./cardioData.json');
const resistanceData = require('./resistanceData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  try {
    await Cardio.deleteMany({});
    await Resistance.deleteMany({});
    await User.deleteMany({});

    await Cardio.create({cardioData});
    await Resistance.create({resistanceData});
    await User.create({userData});


    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

