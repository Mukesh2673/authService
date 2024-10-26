var express = require("express");
var router = express.Router();
const authController = require("../controller/authController")
router.post("/signup", authController.signup)
module.exports = router;