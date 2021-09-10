const db = require("../Models");


// ////this is a index route for Course information////
const index = (req, res) => {
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
const show = (req, res) => {
  db.Hole.findById(req.params.id, (err, foundHole) => {
    if (err) {
      console.log("Error in games#show:", err);

      return res.send("Incomplete Holes#show controller function");
    }

    res.status(200).json({
      hole: foundHole,
    });
  });
}

///this is a edit route for course information//// 
// const edit = (req,res) => {
//   res.send("this is my edit Route for layout infomation")
// }

// /////this is an update route for course information//////
// const update = (req,res) => {
//   res.send("this is my update Route for layout infomation")
// }


module.exports = {
  index,
  show,
}