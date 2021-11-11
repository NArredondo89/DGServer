const router = require("express").Router();
const ctrl = require("../Controllers");

router.get("/", ctrl.hole.index);
router.get("/layout/:id", ctrl.hole.HoleShow);
router.get("/:id/edit", ctrl.hole.HoleEdit);

module.exports = router;
