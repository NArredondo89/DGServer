const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  smallDescription: {
    type: String,
  },
  contact: {
    type: String,
  },
  starTime: {
    type: String,
  },
  dayOfWeek: {
    type: String,
  },
  starFormat: {
    type: String,
  },
  playFormat: {
    type: String,
  },
  description: {
    type: String,
  },
  admin: {
    type: [String],
  },
  course: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
