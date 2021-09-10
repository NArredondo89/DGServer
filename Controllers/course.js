const db = require("../Models");


////this is a index route for Course information////
const index = (req, res) => {
  consolelog(req.param)
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

const edit = (req, res) => {
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
const update = (req,res) => {
  res.send("this is my update Route for course infomation")
}

const update = (req, res) => {
  db.Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedCourse) => {
      if (err) {
        console.log("Error in Course#update:", err);

        return res.send("Incomplete Course#update controller function");
      }

      res.status(200).json({
        updatedCourse,
      });
    }
  );
};


module.exports = {
  index,
  edit,
  update,
}


