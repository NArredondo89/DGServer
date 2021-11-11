const db = require("../Models");

////this is a index route for Course information////
const layoutShow = (req, res) => {
  db.Layout.find({})
    .populate("hole")
    .exec((err, foundLayout) => {
      if (err) {
        console.log("Error in layout#show:", err);

        return res.send("Incomplete layout#show controller function");
      }

      res.status(200).json({
        layout: foundLayout,
      });
    });
};

// ////this is an edit route for Course information////
const layoutEdit = (req, res) => {
  db.Layout.find({})
    .populate("hole")
    .exec((err, editedLayout) => {
      if (err) {
        console.log("Error in layout#show:", err);

        return res.send("Incomplete layout#show controller function");
      }

      res.status(200).json({
        layout: editedLayout,
      });
    });
};

//////////////////////This route updates the course layout////////////////////////////////
const updateLayout = (req, res) => {
  const updatedLayout = { $set: req.body };
  db.Layout.updateOne({ id: req.params.id }, updatedLayout).then(
    (updatedLayout, err) => {
      if (err) {
        console.log("Error in Course#update:", err);

        return res.send("Incomplete Course#update controller function");
      } else {
        return res.status(200).json({
          updatedLayout,
        });
      }
    }
  );
};

//////////////////////This route Creates a reviews on the course layout page////////////////////
const createReview = (req, res) => {
  db.Review.Create(req.body, (err, createReview) => {
    if (err) {
      console.log("Error in Review#create:", err);

      return res.send("Incomplete Review#create controller function");
    }

    res.status(201).json({
      createdReview: createReview,
    });
  });
};

module.exports = {
  layoutShow,
  layoutEdit,
  createReview,
  updateLayout,
};
