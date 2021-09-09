// imports
const router = require("express").Router();
// const auth = require("../Controllers/auth");
const ctrl = require("../Controllers");

// routes
router.post("/register", ctrl.auth.Register);
router.post("/login", ctrl.auth.Login);

// exports
module.exports = router;