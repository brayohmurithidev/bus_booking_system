const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

// SIGNUP ROUTE
router.post("/signup", authController.user_signup);

module.exports = router;
