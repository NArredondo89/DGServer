const router = require("express").Router();
const ctrl = require("../Controllers");

// routes
router.get("/", ctrl.layout.index);
router.get("/:id", ctrl.layout.show)
// router.get("/:id", ctrl.layout.edit);
// router.put("/:id", ctrl.layout.update);


// exports
module.exports = router;