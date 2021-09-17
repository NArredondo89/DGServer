const router = require("express").Router();
const ctrl = require("../Controllers");

// routes
router.get("/", ctrl.course.index);
router.get("/:id", ctrl.course.show);
router.put("/:id", ctrl.course.update);
router.post("/:id", ctrl.review.create)
router.delete("/:id", ctrl.course.destroy)


// exports
module.exports = router;