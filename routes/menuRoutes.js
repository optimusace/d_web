const express = require("express")
const menuController = require("../controllers/menuController")
const upload = require("../config/multer")

const router = express.Router()

router.get("/",menuController.getMenu)
router.post("/",upload.any(),menuController.addMenu)
router.patch("/:id",upload.any(),menuController.updateMenu)
router.delete("/delete-menu/:id",menuController.deleteMenu)
router.delete("/delete-sub-menu/:menuId/:subMenuId",menuController.deleteSubMenu)

module.exports = router
