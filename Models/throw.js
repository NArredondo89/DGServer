const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const throwSchema = new Schema({
    name : {
      type: String,
      required: true,
    },
    image: {
      type:String,
      required: true, 
    },
    content: {
      type: String, 
      required: true, 
    }
})

const Throw = mongoose.model("Throw", throwSchema);

module.exports = Throw;