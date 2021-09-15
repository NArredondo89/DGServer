const router = require("express").Router();
const ctrl = require("../Controllers");

// routes
router.get("/", ctrl.layout.layoutShow);
router.get("/:id", ctrl.layout.layoutEdit);
router.put("/:id", ctrl.layout.updateLayout);
router.post("/:id", ctrl.layout.createReview)



// exports
module.exports = router;