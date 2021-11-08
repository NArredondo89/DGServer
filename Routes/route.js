const router = require("express").Router();
const ctrl = require("../Controllers");

// routes
router.get("/", ctrl.route.index);
router.get("/:id", ctrl.route.show);

exports;
module.exports = router;
