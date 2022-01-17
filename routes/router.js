const express = require("express");

const router = express.Router();

const loginController = require("../controllers/login");

const signupController = require("../controllers/signup");

router.post("/login", loginController.doLogin);
router.post("/signup", signupController.doSignUp);

module.exports = router;
