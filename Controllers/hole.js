const db = require("../Models");

const index = (req, res) => {
  db.Hole.find({}, (err, foundHole) => {
    if (err) {
      console.log("Error in Hole#index:", err);

      return res.send("Incomplete Hole#index controller function");
    }
    res.status(200).json({
      hole: foundHole,
    });
  });
};

const HoleShow = (req, res) => {
  db.Hole.findById(req.params.id, (err, foundHole) => {
    if (err) {
      console.log("Error in hole#show:", err);

      return res.send("Incomplete Holes#show controller function");
    }

    res.status(200).json({
      hole: foundHole,
    });
  });
};

const HoleEdit = (req, res) => {
  db.Hole.findById(req.params.id, (err, foundHole) => {
    if (err) {
      console.log("Error in hole#show:", err);

      return res.send("Incomplete Holes#show controller function");
    }

    res.status(200).json({
      hole: foundHole,
    });
  });
};

module.exports = {
  HoleShow,
  index,
  HoleEdit,
};
