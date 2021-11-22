const { User } = require("../Models");

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

module.exports = {
  show,
};
