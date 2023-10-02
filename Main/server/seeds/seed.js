const db = require('../config/connection');
const { Cardio, Resistance, User } = require('../models');

const cardioData = require('./cardioData.json');
const resistanceData = require('./resistanceData.json');
const userData = require('./userData.json');

async function seedDatabase() {
  try {
    // Remove existing data from collections
    await Cardio.deleteMany({});
    await Resistance.deleteMany({});
    await User.deleteMany({});

    // Insert cardio and resistance data into the database
    const cardios = await Cardio.insertMany(cardioData);
    const resistances = await Resistance.insertMany(resistanceData);

    // Associate cardio and resistance data with users
    const users = await User.insertMany(userData);

    // Loop through users and assign random exercises
    users.forEach(async (user) => {
      const randomCardios = getRandomExercises(cardios);
      const randomResistances = getRandomExercises(resistances);

      user.cardio = randomCardios.map((exercise) => exercise._id);
      user.resistance = randomResistances.map((exercise) => exercise._id);

      await user.save();
    });

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Close the database connection
    db.close();
  }
}

function getRandomExercises(exerciseArray) {
  const numberOfExercises = Math.floor(Math.random() * exerciseArray.length) + 1;
  const randomExercises = [];
  for (let i = 0; i < numberOfExercises; i++) {
    const randomIndex = Math.floor(Math.random() * exerciseArray.length);
    randomExercises.push(exerciseArray[randomIndex]);
  }
  return randomExercises;
}

// Call the seedDatabase function to populate the database
seedDatabase();
