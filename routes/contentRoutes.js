const express = require("express")
const contentsController = require("../controllers/contentsController")

const router = express.Router()

router.get("/:mainLink",contentsController.getMainMenuContents)
router.get("/:mainLink/:subLink",contentsController.getSubMenuContents)

module.exports = router

