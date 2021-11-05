const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
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
  holes: {
    type: String,
  },
  services: {
    type: String,
  },
  established: {
    type: Number,
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

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
