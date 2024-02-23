const express = require("express")
const memberController = require("../controllers/memberController")
const upload = require("../config/multer")

const router = express.Router()

router.get("/",memberController.getMembers)
router.post("/",upload.any(),memberController.addMember)
router.put("/:id",upload.any(),memberController.updateMember)
router.delete("/:id",memberController.deleteMember)

module.exports = router

/* 
//MEMBERS API
app.get("/api/v1/members",memberController.getMembers)
app.post("/api/v1/members",upload.any(),memberController.addMember)
app.put("/api/v1/members/:id",upload.any(),memberController.updateMember)
app.delete("/api/v1/member/:id",memberController.deleteMember)
*/