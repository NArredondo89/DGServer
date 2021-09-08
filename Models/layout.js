const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const layoutSchema = new Schema({
    tite : {
      type: String,
      required: true,
    },
    totalHoles: {
      type:Number,
      required: true, 
    },
    totalPar: {
      type: Number, 
      required: true, 
    },
    totalFeet : {
      type: Number,
    },
})

const Layout = mongoose.model("Layout", layoutSchema);

module.exports = Layout;