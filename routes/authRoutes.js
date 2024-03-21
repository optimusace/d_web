const express = require("express")
const authController = require("../controllers/authController")

const router = express.Router()

router.get("/signup",authController.getSignUpForm)
router.post("/signup",authController.signup)
router.get("/login",authController.getLoginForm)
router.post("/login",authController.login)

module.exports = router