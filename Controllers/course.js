const db = require("../Models");


////this is a index route for Course information////
const index = (req, res) => {

  db.Course.find({}, (err, foundCourse) => {
    if (err) {
      console.log("Error in Course#index:", err);

      return res.send("Incomplete Course#index controller function");
    }

    res.status(200).json({
      Course: foundCourse,
    });
  });
};

const show = (req, res) => {
  db.Course.findById(req.params.id, (err, foundCourse) => {
    if (err) {
      console.log("Error in Course#show:", err);

      return res.send("Incomplete Course#show controller function");
    }

    res.status(200).json({
      Course: foundCourse,
    });
  });
};

/////this is an update route for course information//////

const update = (req, res) => {
  const updatedCourse = {$set: req.body}
  db.Course.updateOne(
    {id: req.params.id},
    updatedCourse
  ).then(
    (updatedCourse, err) => {
      if (err) {
        console.log("Error in Course#update:", err);

        return res.send("Incomplete Course#update controller function");
      } else {
        return res.status(200).json({
          updatedCourse,
        });
      }
    }
  )
};



module.exports = {
  index,
  show,
  update,
}


