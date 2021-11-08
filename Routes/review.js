const router = require("express").Router();
const ctrl = require("../Controllers");

// routes
router.get("/", ctrl.review.show);
router.post("/:id", ctrl.review.create);
router.delete("/:id,", ctrl.review.destroy);

// exports
module.exports = router;
