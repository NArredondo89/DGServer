const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    Username : {
      type: String,
      required: true,
    },
    Rating: {
      type: String,
      required: true, 
    },
    Content: {
      type: String, 
      required: true, 
    },
    User: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    }
  },
  {
    timesptamps:true
  }
);

const Review = mongoose.model("Reviews", reviewSchema);

module.exports = Review;