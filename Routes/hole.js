const router = require("express").Router();
const ctrl = require("../Controllers");

router.get("/", ctrl.hole.index);
router.get("/:id/edit", ctrl.hole.HoleEdit);
router.get("/layout/:id", ctrl.hole.HoleShow);

module.exports = router;
