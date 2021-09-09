const create = (req,res) => {
  db.Course.create({}, (err, createdCourse) => {
    req.body,
    if (err) {
      console.log("Error in Course#index:", err);

      return res.send("Incomplete Course#index controller function");
    }

    res.status(200).json({
      Course: createdCourse,
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