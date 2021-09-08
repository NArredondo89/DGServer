const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
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
})

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;