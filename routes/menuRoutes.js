const express = require("express")
const menuController = require("../controllers/menuController")
const upload = require("../config/multer")

const router = express.Router()

router.get("/",menuController.getMenu)
router.post("/",upload.any(),menuController.addMenu)

module.exports = router

/* 
//MENU API
app.get("/api/v1/menu",menuController.getMenu)
app.post("/api/v1/menu",upload.any(),menuController.addMenu)
*/