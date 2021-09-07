const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const holeSchema = new Schema({
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

const Hole = mongoose.model("Hole", holeSchema);

module.exports = Hole;