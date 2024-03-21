const express = require("express")
const memberController = require("../controllers/memberController")
const upload = require("../config/multer")

const router = express.Router()

router.get("/",memberController.getMembers)
router.post("/",upload.any(),memberController.addMember)
router.put("/:id",upload.any(),memberController.updateMember)
router.delete("/:id",memberController.deleteMember)

module.exports = router
