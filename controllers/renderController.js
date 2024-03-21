const Menu = require("../models/menu")

const viewMenuContentForm = (req,res)=>{
    res.render("contentForm")
}

const getMenuDetails = async (req,res)=>{
    try{
        const menus = await Menu.find({userId:req.user.id})
        res.render("menuDetails",{menus:menus}) 
    }catch(err){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const viewUpdateForm = async(req,res)=>{
    try{
        const menuId = req.params.id
        const menu = await Menu.findById(menuId)
        if(!menu){
            return res.status(404).json({success:false,message:"Sorry couldn't proceed"})
        }
        res.render("updateForm",{menu})
    }catch(err){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports = {
    viewMenuContentForm,
    getMenuDetails,
    viewUpdateForm
}