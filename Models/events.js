const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
  },
  parkPhoto: {
    type: String,
  },
  location: {
    type: String,
  },
  locationImage: {
    type: String,
  },
  holes: {
    type: String,
  },
  services: {
    type: String,
  },
  established: {
    type: String,
  },
  property: {
    type: String,
  },
  tees: {
    type: String,
  },
  availability: {
    type: String,
  },
  targets: {
    type: String,
  },
  layout: {
    type: [mongoose.Types.ObjectId],
    ref: "Layout",
  },
});

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;
