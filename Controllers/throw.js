const db = require("../Models");


////this is a index route for Course information////
const index = (req,res) => {
  res.send("this is my Home Route for course infomation")
}


module.exports = {
  index,
}