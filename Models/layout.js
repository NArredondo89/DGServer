const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const layoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    totalHoles: {
      type: String,
      required: true,
    },
    totalPar: {
      type: String,
      required: true,
    },
    totalFeet: {
      type: String,
    },
    layoutInformation: {
      type: String,
    },
    hazzard: {
      type: String,
    },
    outOfBounds: {
      type: String,
    },
    hole: {
      type: [mongoose.Types.ObjectId],
      ref: "Hole",
    },
  },
  {
    timestamps: true,
  }
);

const Layout = mongoose.model("Layout", layoutSchema);

module.exports = Layout;
