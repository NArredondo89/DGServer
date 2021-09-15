const db = require("../Models");

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

module.exports = holeShow