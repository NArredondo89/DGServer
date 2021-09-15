const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const holeSchema = new Schema({
    hole : {
      type: Number,
      required: true,
    },
    image: {
      type:String,
    },
    par: {
      type:Number,
      required: true, 
    },
    feet: {
      type: Number, 
    },
    mandos : {
      type: String,
    },
    outOfBounds: {
      type:String,
    },
    hazzards: {
      type: String, 
    }
})

const Hole = mongoose.model("Hole", holeSchema);

module.exports = Hole;