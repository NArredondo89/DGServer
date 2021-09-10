const db = require("../Models");


// ////this is a index route for Course information////
const layoutShow = (req, res) => {
  db.Layout.find({}, (err, foundLayout) => {
    if (err) {
      console.log("Error in layout#show:", err);

      return res.send("Incomplete layout#show controller function");
    }

    res.status(200).json({
      layout: foundLayout,
    });
  });
}


/////this is a show route for the holes on the layout page/////////
const holeShow = (req, res) => {
  db.Hole.findById(req.params.id, (err, foundHole) => {
    if (err) {
      console.log("Error in hole#show:", err);

      return res.send("Incomplete Holes#show controller function");
    }

    res.status(200).json({
      hole: foundHole,
    });
  });
}


const createReview = (req, res) => {
  console.log(req.body)
  db.Review.create(req.body,
    (err, createReview) => {
      if (err) {
        console.log('Error in Review#create:', err);

        return res.send("Incomplete Review#create controller function");
      }

      res.status(201).json({
        createdReview: createReview
      });
    });
};



const updateLayout = (req, res) => {

  const updatedLayout = {$set: req.body}
  db.Layout.updateOne(
    {id: req.params.id},
    updatedLayout
  ).then(
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
  )
};





module.exports = {
  layoutShow,
  holeShow,
  createReview,
  updateLayout
}