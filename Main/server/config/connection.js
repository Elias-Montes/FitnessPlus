const { connect, connection } = require('mongoose');

// mongoose.set("strictQuery", false);

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable, and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://Faizan:1234@atlascluster.s8xdtyu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  // Handle the error appropriately, e.g., exit the application or perform other actions
});

connection.once('open', () => {
  console.log('Connected to MongoDB!');
});

module.exports = connection;
