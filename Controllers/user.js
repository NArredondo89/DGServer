const { User } = require("../Models");


////this is a index route for Course information////
const show = async (req, res, next) => {
  try {
    const foundUser = await User.findById(req.userId);
    return res.status(200).json({
      status: 200,
      message: "success",
      data: foundUser,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error" });
  }
};


/////this is a edit route for course information//// 
const edit = (req,res) => {
  res.send("this is my edit Route for layout infomation")
}

/////this is an update route for course information//////
const update = (req,res) => {
  res.send("this is my update Route for layout infomation")
}


module.exports = {
  show,
  edit,
  update,
}