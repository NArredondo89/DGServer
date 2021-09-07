const db = require("../Models");


////this is a index route for Course information////
const index = (req,res) => {
  res.send("this is my Home Route for course infomation")
}

/////this is a edit route for course information//// 
const edit = (req,res) => {
  res.send("this is my edit Route for course infomation")
}

/////this is an update route for course information//////
const update = (req,res) => {
  res.send("this is my update Route for course infomation")
}


module.exports = {
  index,
  edit,
  update,
}