const Menu = require("../models/menu")

const viewMenuContentForm = (req,res)=>{
    res.render("contentForm")
}

const getMenuDetails = async (req,res)=>{
    try{
        const menu = await Menu.find()
        res.render("menuDetails",{menu,checkValue:"check"})
    }catch(err){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports = {
    viewMenuContentForm,
    getMenuDetails
}