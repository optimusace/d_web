const express = require("express")
const menuController = require("../controllers/menuController")
const upload = require("../config/multer")
const {authenticate} = require("../middleware/authMiddleware")

const router = express.Router()

router.get("/:userId",menuController.getMenu)   //for normal users to access the menu in frontend
router.post("/",authenticate,upload.any(),menuController.addMenu)
router.put("/:id",authenticate,upload.any(),menuController.updateMenu)
router.delete("/delete-menu/:id",authenticate,menuController.deleteMenu)
router.delete("/delete-sub-menu/:menuId/:subMenuId",authenticate,menuController.deleteSubMenu)

module.exports = router
