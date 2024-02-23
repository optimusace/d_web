const express = require("express")
const contentsController = require("../controllers/contentsController")

const router = express.Router()

router.get("/:mainLink",contentsController.getMainMenuContents)
router.get("/:mainLink/:subLink",contentsController.getSubMenuContents)

module.exports = router

/* 
//ROUTES TO GET CONTENTS FOR MENUS/SUB-MENUS BASED ON LINK
app.get("/:mainLink",contentsController.getMainMenuContents)
app.get("/:mainLink/:subLink",contentsController.getSubMenuContents)
*/