const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const routeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
});

const Route = mongoose.model("Route", routeSchema);

module.exports = Route;
