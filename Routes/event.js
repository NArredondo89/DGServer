const router = require("express").Router();
const ctrl = require("../Controllers");

// routes
router.get("/", ctrl.event.index);
router.get("/:id", ctrl.event.show);
router.put("/:id", ctrl.event.update);
router.delete("/:id", ctrl.event.destroy);

// exports
module.exports = router;
