const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const layoutSchema = new Schema({
    tite : {
      type: String,
      required: true,
    },
    totalHoles: {
      type:Integer,
      required: true, 
    },
    totalPar: {
      type: String, 
      required: true, 
    },
    totalFeet : {
      type: Integer,
    },
})

const Layout = mongoose.model("Layout", layoutSchema);

module.exports = Layout;