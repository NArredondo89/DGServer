const db = require("../Models");

////this is a index route for Event information////
const index = (req, res) => {
  db.Event.find({}, (err, foundEvent) => {
    if (err) {
      console.log("Error in Event#index:", err);

      return res.send("Incomplete Event#index controller function");
    }

    res.status(200).json({
      Event: foundEvent,
    });
  });
};

const show = (req, res) => {
  db.Event.findById(req.params.id, (err, foundEvent) => {
    if (err) {
      console.log("Error in Event#show:", err);

      return res.send("Incomplete Event#show controller function");
    }

    res.status(200).json({
      Event: foundEvent,
    });
  });
};

/////this is an update route for Event information//////
const update = (req, res) => {
  const updatedEvent = { $set: req.body };
  db.Event.updateOne({ id: req.params.id }, updatedEvent).then(
    (updatedEvent, err) => {
      if (err) {
        console.log("Error in Event#update:", err);

        return res.send("Incomplete Event#update controller function");
      } else {
        return res.status(200).json({
          updatedEvent,
        });
      }
    }
  );
};

const destroy = (req, res) => {
  db.Event.find({}, (err, deletedReview) => {
    if (err) {
      console.log("Error in games#destroy:", err);

      return res.send("Incomplete Events#destroy controller function");
    }

    res.status(200).json({
      deletedReview,
    });
  });
};

module.exports = {
  index,
  show,
  update,
  destroy,
};
