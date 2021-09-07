const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    hole : {
      type: Integer,
      required: true,
    },
    par: {
      type:integer,
      required: true, 
    },
    feet: {
      type: String, 
      required: true, 
    },
    mandos : {
      type: Integer,
      required: true,
    },
    outOfBounds: {
      type:integer,
      required: true, 
    },
    hazzards: {
      type: String, 
      required: true, 
    }
})

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;