const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const holeSchema = new Schema({
  picture: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  par: {
    type: String,
    required: true,
  },
  feet: {
    type: String,
  },
  mandatory: {
    type: String,
  },
  outOfBounds: {
    type: String,
  },
  hazzards: {
    type: String,
  },
  Route: {
    type: [mongoose.Types.ObjectId],
    ref: "Route",
  },
});

const Hole = mongoose.model("Hole", holeSchema);

module.exports = Hole;
