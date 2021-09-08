const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    username : {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true, 
    },
    content: {
      type: String, 
      required: true, 
    },
    user: {
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