const router = require("express").Router();
const ctrl = require("../Controllers");

// routes
router.get("/", ctrl.layout.layoutShow);
router.get("/:id", ctrl.layout.layoutEdit);
router.get("/:id", ctrl.layout.holeShow)
router.put("/:id", ctrl.layout.updateLayout);
router.post("/:id", ctrl.layout.createReview)
router.get("/:id", ctrl.layout.throwShow)


// exports
module.exports = router;