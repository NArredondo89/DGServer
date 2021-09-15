const router = require("express").Router();
const ctrl = require("../Controllers");

router.get("/", ctrl.hole.index)
router.get("/:id", ctrl.hole.HoleShow);


module.exports = router;