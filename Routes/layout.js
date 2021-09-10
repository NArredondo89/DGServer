const router = require("express").Router();
const ctrl = require("../Controllers");

// routes
router.get("/", ctrl.layout.layoutShow);
router.get("/:id", ctrl.layout.holeShow)
router.post("/review", ctrl.layout.createReview)
// router.get("/:id", ctrl.layout.edit);
router.put("/:id", ctrl.layout.updateLayout);


// exports
module.exports = router;