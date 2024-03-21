const express = require("express")
const renderController = require("../controllers/renderController")
const {authenticate} = require("../middleware/authMiddleware")

const router = express.Router()

router.get("/menu-details",authenticate,renderController.getMenuDetails)
router.get("/menu-content-form",authenticate,renderController.viewMenuContentForm)
router.get("/menu-update/:id",authenticate,renderController.viewUpdateForm)

module.exports = router