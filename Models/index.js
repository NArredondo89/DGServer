const mongoose = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/gamelib";
const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(connectionString, configOptions)
  .then(() => console.log("MongoDB successfully connected..."))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

  module.exports = {
    Course: require('./course'),
    Layout: require('./layout'),
    Hole: require('./hole'),
    Throw: require('./throw'),
    User: require('./user'),
    Review: require('./review'),
  }

  