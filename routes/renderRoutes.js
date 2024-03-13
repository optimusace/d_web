const express = require("express")
const renderController = require("../controllers/renderController")

const router = express.Router()

router.get("/menu-content-form",renderController.viewMenuContentForm)
router.get("/menu-details",renderController.getMenuDetails)
router.get("/menu-update/:id",renderController.viewUpdateForm)

module.exports = router