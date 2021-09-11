



////////
const create = (req,res) => {
  db.Review.create({}, (err, createdReview) => {
    req.body;
    if (err) {
      console.log("Error in create#index:", err);

      return res.send("Incomplete Course#index controller function");
    }

    res.status(200).json({
      Course: createdReview,
    });
  });
};



const destroy = (req,res) => {
  res.send("This is my destoy comments route")
}


module.exports = {
  create,
  destroy,
}