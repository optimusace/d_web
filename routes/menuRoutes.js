const express = require("express")
const menuController = require("../controllers/menuController")
const upload = require("../config/multer")

const router = express.Router()

router.get("/",menuController.getMenu)
router.post("/",upload.any(),menuController.addMenu)
router.delete("/delete-menu/:id",menuController.deleteMenu)
router.delete("/delete-sub-menu/:mainId/:subMenuId",menuController.deleteSubMenu)

module.exports = router
