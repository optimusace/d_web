const express = require("express")
const authController = require("../controllers/authController")
const {authenticate} = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/signup",authController.signup)
router.post("/login",authenticate,authController.login)

module.exports = router