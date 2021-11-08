const db = require("../Models");

const index = (req, res) => {
  db.Route.find({}, (err, foundRoute) => {
    if (err) {
      console.log("Error in Route#index:", err);

      return res.send("Incomplete Route#index controller function");
    }

    res.status(200).json({
      Route: foundRoute,
    });
  });
};

const show = (req, res) => {
  db.Route.findById(req.params.id, (err, foundRoute) => {
    if (err) {
      console.log("Error in Route#show:", err);

      return res.send("Incomplete Route#show controller function");
    }

    res.status(200).json({
      Route: foundRoute,
    });
  });
};

const update = (req, res) => {
  const updatedRoute = { $set: req.body };
  db.Route.updateOne({ id: req.params.id }, updatedRoute).then(
    (updatedRoute, err) => {
      if (err) {
        console.log("Error in Route#update:", err);

        return res.send("Incomplete Route#update controller function");
      } else {
        return res.status(200).json({
          updatedRoute,
        });
      }
    }
  );
};

const destroy = (req, res) => {
  db.Route.find({}, (err, deletedReview) => {
    if (err) {
      console.log("Error in Route#destroy:", err);

      return res.send("Incomplete Route#destroy controller function");
    }

    res.status(200).json({
      deletedRoute,
    });
  });
};

module.exports = {
  index,
  show,
  update,
  destroy,
};
