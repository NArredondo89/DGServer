const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/discgolf";

const configOptions = {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true
  // useFindAndModify: false
};

mongoose.connect(connectionString, configOptions)
  // .then(() => console.log("MongoDB successfully connected..."))
  // .catch((err) => console.log(`MongoDB connection error: ${err}`));

  mongoose.set('returnOriginal', false )
  mongoose.connection.once('open', () => console.log("connected to mongodb"))

  module.exports = {
    Course: require('./course'),
    Layout: require('./layout'),
    Hole: require('./hole'),
    Throw: require('./throw'),
    User: require('./user'),
    Review: require('./review')
  }

 