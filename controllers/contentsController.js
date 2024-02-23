const Menu = require("../models/menu")

const getMainMenuContents = (req,res)=>{
    const link = req.params.mainLink
    const path = `/${link}`
    Menu.findOne({link:path})
    .then((menu)=>{
        if(menu){  
            res.status(200).json({success:true,data:menu.contents})
        }else{
            res.status(404).json({success:false,message:"Resource not found"})
        }
    })
    .catch((err)=>{
        res.status(500).json({success:false,message:"Internal Server Error",error:err})
    })
}

const getSubMenuContents = (req,res)=>{
    const mainLink = req.params.mainLink
    const subLink = req.params.subLink
    const mainPath = `/${mainLink}`
    const combinedPath = `/${mainLink}/${subLink}`;
    Menu.findOne({link:mainPath})
    .then((menu)=>{
        if(!menu){
            return res.status(404).json({success:false,message:"Resource not found"})
        }
        const subMenu = menu.subMenus.find((subMenu)=>{return subMenu.link === combinedPath})
        if(!subMenu){
            return res.status(404).json({success:false,message:"Resource not found"})
        }
        res.status(200).json({success:true,data:subMenu.contents})
    })  
    .catch((err)=>{
        res.status(500).json({success:false,message:"Internal Server Error",error:err})
    })
}

module.exports = {
    getMainMenuContents,
    getSubMenuContents
}