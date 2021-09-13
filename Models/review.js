const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: {
      type: Number,
      required: true, 
    },
    content: {
      type: String, 
      required: true, 
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    course: {
      type: mongoose.Types.ObjectId,
      ref:"Course",
    },
    holes:{
      type: mongoose.Types.ObjectId,
      ref:"Hole"
    }
  },
  {
    timesptamps:true
  }
);

const Review = mongoose.model("Reviews", reviewSchema);

module.exports = Review;