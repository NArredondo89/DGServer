const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playDateSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PlayDate = mongoose.model("PlayDate", playDateSchema);

module.exports = PlayDate;
