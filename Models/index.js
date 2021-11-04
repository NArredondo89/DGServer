const mongoose = require("mongoose");
require("dotenv").config();

const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/discgolf";
const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(connectionString, configOptions)
  .then(() => console.log("MongoDB successfully connected..."))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  Course: require("./course"),
  Layout: require("./layout"),
  Hole: require("./hole"),
  Route: require("./route"),
  User: require("./user"),
  Review: require("./route.js"),
  PlayDate: require("./playDate"),
  Events: require("./events"),
};
