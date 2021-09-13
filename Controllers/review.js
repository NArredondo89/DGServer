const db = require("../Models");



////////this is a review create router 
const create = (req,res) => {
  db.Review.create((req.param.id, (err, createdReview) => {
    req.body;
    if (err) {
      console.log("Error in create#index:", err);

      return res.send("Incomplete Course#index controller function");
    }

    res.status(200).json({
      Course: createdReview,
    });
  }));
};



const destroy = (req, res) => {
  db.Review.findByIdAndDelete(req.params.id, (err, deletedReview) => {
    if (err) {
      console.log('Error in games#destroy:', err)

      return res.send("Incomplete games#destroy controller function");
    }

    res.status(200).json(
      {
        deletedReview
      }
    );
  });
};

module.exports = {
  create,
  destroy,
}