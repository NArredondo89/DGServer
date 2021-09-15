const router = require("express").Router();
const ctrl = require("../Controllers");

router.get("/:id", ctrl.layout.holeShow)


module.exports = router;