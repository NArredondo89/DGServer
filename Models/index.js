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
  Event: require("./event"),
  Hole: require("./hole"),
  Layout: require("./layout"),
  PlayDate: require("./playDate"),
  Review: require("./review"),
  Route: require("./route"),
  User: require("./user"),
};
