const Menu = require("../models/menu")

//GET ALL MENU
const getMenu = async (req,res)=>{
    try{
        const id = req.params.userId
        const menu = await Menu.find({userId:id})
        res.status(201).json({success:true,message:"Successfully retrieved menus",data:menu})
    }catch(err){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}


//ADD MENU
const addMenu = async (req,res)=>{
    //CREATING MENU OBJECT ON THE BASIS OF REQUEST
    const menuObject = {}

    const reqData = req.body
    const reqFiles = req.files

    menuObject["userId"] = req.user.id

    if (reqData.name){
        menuObject["name"] = reqData.name
    }
    if(reqData.link){
        menuObject["link"] = reqData.link 
    }
    //FIND THE TOTAL NUMBER OF MAIN MENU CONENTS
    let maxMainContent = null
    for(let key in reqData){
        if(key.startsWith("main_")){
            const num = parseInt(key.match(/\d+$/)[0])  //regular expression that matches one or more string at the end of the string
            if(num > maxMainContent){
                maxMainContent = num
            }
        }
    }
    
    //CREATE A ARRAY OF MAIN CONTENTS
    const mainContents = []
    for(let i=1;i<=maxMainContent;i++){
        const mainContent = {}
        if(reqData[`main_contentBy${i}`]){
            mainContent["contentBy"] = reqData[`main_contentBy${i}`]
        }
        if(reqData[`main_heading${i}`]){
            mainContent["heading"] = reqData[`main_heading${i}`]
        }
        if(reqData[`main_subHeading${i}`]){
            mainContent["subHeading"] = reqData[`main_subHeading${i}`]
        }
        if(reqData[`main_shortDescription${i}`]){
            mainContent["shortDescription"] = reqData[`main_shortDescription${i}`]
        }
        if(reqData[`main_longDescription${i}`]){
            mainContent["longDescription"] = reqData[`main_longDescription${i}`]
        }
        if(reqData[`main_pageLocation${i}`]){
            mainContent["pageLocation"] = reqData[`main_pageLocation${i}`]
        }
        if(reqFiles.some((file)=>{return file.fieldname === `main_images${i}`})){
            const images = reqFiles.filter((file)=>{return file.fieldname ===`main_images${i}`})
            mainContent["imagePath"] = images.map((file)=>{return file.path})
        }
        if(reqData[`main_imageDescription${i}`]){
            mainContent["imageDescription"] = reqData[`main_imageDescription${i}`]
        }
        mainContents.push(mainContent)
    }
    menuObject["contents"] = mainContents
    
    //FIND THE TOTAL NUMBER OF SUB MENU 
    let maxSubMenu = null
    for(let key in reqData){
        if(key.startsWith("subMenu_") && !key.startsWith("subMenu_content")){   
            const num = parseInt(key.match(/\d+$/)[0])
            if(num>maxSubMenu){
                maxSubMenu = num
            }
        }
    }
    
    //ARRAY OF SUBMENU
    const subMenus = []
    for(let i=1;i<=maxSubMenu;i++){
        const subMenu = {}
        if(reqData[`subMenu_name${i}`]){
            subMenu["name"] = reqData[`subMenu_name${i}`]
        }
        if(reqData[`subMenu_link${i}`]){
            subMenu["link"] = reqData[`subMenu_link${i}`]
        }
        //FIND THE TOTAL NUMBER OF CONTENTS FOR THE SUB MENU
        const subMenuInitials = `subMenu_content${i}`
        let maxSubMenuContents = null
        for(let key in reqData){
            if(key.startsWith(subMenuInitials)){
                const num = parseInt(key.match(/\d+$/)[0])
                if(num>maxSubMenuContents){
                    maxSubMenuContents = num
                }
            }
        }    


        //ARRAY OF CONTENTS FOR THAT SPECIFIC SUB MENU
        const subMenuContents = [] 
        for(let i=1;i<=maxSubMenuContents;i++){
            const subMenuContent = {}
            if(reqData[`${subMenuInitials}_contentBy${i}`]){
                subMenuContent['contentBy'] = reqData[`${subMenuInitials}_contentBy${i}`]
            }
            if(reqData[`${subMenuInitials}_heading${i}`]){
                subMenuContent["heading"] = reqData[`${subMenuInitials}_heading${i}`]
            }
            if(reqData[`${subMenuInitials}_subHeading${i}`]){
                subMenuContent["subHeading"] = reqData[`${subMenuInitials}_subHeading${i}`]
            }
            if(reqData[`${subMenuInitials}_shortDescription${i}`]){
                subMenuContent["shortDescription"] = reqData[`${subMenuInitials}_shortDescription${i}`]
            }
            if(reqData[`${subMenuInitials}_longDescription${i}`]){
                subMenuContent["longDescription"] = reqData[`${subMenuInitials}_longDescription${i}`]
            }
            if(reqData[`${subMenuInitials}_pageLocation${i}`]){
                subMenuContent["pageLocation"] = reqData[`${subMenuInitials}_pageLocation${i}`]
            }
            if(reqFiles.some((file)=>{return file.fieldname === `${subMenuInitials}_images${i}`})){
                const images = reqFiles.filter((file)=>{return file.fieldname === `${subMenuInitials}_images${i}`})
                subMenuContent["imagePath"] = images.map((file)=>{return file.path})
            }
            if(reqData[`${subMenuInitials}_imageDescription${i}`]){
                subMenuContent["imageDescription"] = reqData[`${subMenuInitials}_imageDescription${i}`]
            }
            subMenuContents.push(subMenuContent)
        }
        subMenu["contents"] = subMenuContents
        subMenus.push(subMenu)
    }
    menuObject["subMenus"] = subMenus

    try{
        const newMenu = await Menu.create(menuObject)
        res.redirect("/menu-details")
        //res.status(201).json({success:true,message:"menu created successfully",data:newMenu})
    }catch(err){
        res.status(500).json({success:false,message:"Unable to create menu",error:err.message})
    }
}

//UPDATE MENU
const updateMenu = async(req,res)=>{
    //CREATING MENU OBJECT ON THE BASIS OF REQUEST  
    const id = req.params.id
    const menuObject = {}
    const reqData = req.body
    const reqFiles = req.files

    if (reqData.name){
        menuObject["name"] = reqData.name
    }
    if(reqData.link){
        menuObject["link"] = reqData.link 
    }

    //FIND THE TOTAL NUMBER OF MAIN MENU CONENTS
    let maxMainContent = null
    for(let key in reqData){
        if(key.startsWith("main_")){
            const num = parseInt(key.match(/\d+$/)[0])  //regular expression that matches one or more string at the end of the string
            if(num > maxMainContent){
                maxMainContent = num
            }
        }
    }
    //CREATE A ARRAY OF MAIN CONTENTS
    const mainContents = []
    for(let i=1;i<=maxMainContent;i++){
        const mainContent = {}
        if(reqData[`main_contentBy${i}`]){
            mainContent["contentBy"] = reqData[`main_contentBy${i}`]
        }
        if(reqData[`main_heading${i}`]){
            mainContent["heading"] = reqData[`main_heading${i}`]
        }
        if(reqData[`main_subHeading${i}`]){
            mainContent["subHeading"] = reqData[`main_subHeading${i}`]
        }
        if(reqData[`main_shortDescription${i}`]){
            mainContent["shortDescription"] = reqData[`main_shortDescription${i}`]
        }
        if(reqData[`main_longDescription${i}`]){
            mainContent["longDescription"] = reqData[`main_longDescription${i}`]
        }
        if(reqData[`main_pageLocation${i}`]){
            mainContent["pageLocation"] = reqData[`main_pageLocation${i}`]
        }
        if(reqFiles.some((file)=>{return file.fieldname === `main_images${i}`})){
            const images = reqFiles.filter((file)=>{return file.fieldname ===`main_images${i}`})
            mainContent["imagePath"] = images.map((file)=>{return file.path})
        }
        if(reqData[`main_imageDescription${i}`]){
            mainContent["imageDescription"] = reqData[`main_imageDescription${i}`]
        }
        mainContents.push(mainContent)
    }
    menuObject["contents"] = mainContents
    
    //FIND THE TOTAL NUMBER OF SUB MENU 
    let maxSubMenu = null
    for(let key in reqData){
        if(key.startsWith("subMenu_") && !key.startsWith("subMenu_content")){   
            const num = parseInt(key.match(/\d+$/)[0])
            if(num>maxSubMenu){
                maxSubMenu = num
            }
        }
    }
    
    //ARRAY OF SUBMENU
    const subMenus = []
    for(let i=1;i<=maxSubMenu;i++){
        const subMenu = {}
        if(reqData[`subMenu_name${i}`]){
            subMenu["name"] = reqData[`subMenu_name${i}`]
        }
        if(reqData[`subMenu_link${i}`]){
            subMenu["link"] = reqData[`subMenu_link${i}`]
        }
        //FIND THE TOTAL NUMBER OF CONTENTS FOR THE SUB MENU
        const subMenuInitials = `subMenu_content${i}`
        let maxSubMenuContents = null
        for(let key in reqData){
            if(key.startsWith(subMenuInitials)){
                const num = parseInt(key.match(/\d+$/)[0])
                if(num>maxSubMenuContents){
                    maxSubMenuContents = num
                }
            }
        }    


        //ARRAY OF CONTENTS FOR THAT SPECIFIC SUB MENU
        const subMenuContents = [] 
        for(let i=1;i<=maxSubMenuContents;i++){
            const subMenuContent = {}
            if(reqData[`${subMenuInitials}_contentBy${i}`]){
                subMenuContent['contentBy'] = reqData[`${subMenuInitials}_contentBy${i}`]
            }
            if(reqData[`${subMenuInitials}_heading${i}`]){
                subMenuContent["heading"] = reqData[`${subMenuInitials}_heading${i}`]
            }
            if(reqData[`${subMenuInitials}_subHeading${i}`]){
                subMenuContent["subHeading"] = reqData[`${subMenuInitials}_subHeading${i}`]
            }
            if(reqData[`${subMenuInitials}_shortDescription${i}`]){
                subMenuContent["shortDescription"] = reqData[`${subMenuInitials}_shortDescription${i}`]
            }
            if(reqData[`${subMenuInitials}_longDescription${i}`]){
                subMenuContent["longDescription"] = reqData[`${subMenuInitials}_longDescription${i}`]
            }
            if(reqData[`${subMenuInitials}_pageLocation${i}`]){
                subMenuContent["pageLocation"] = reqData[`${subMenuInitials}_pageLocation${i}`]
            }
            if(reqFiles.some((file)=>{return file.fieldname === `${subMenuInitials}_images${i}`})){
                const images = reqFiles.filter((file)=>{return file.fieldname === `${subMenuInitials}_images${i}`})
                subMenuContent["imagePath"] = images.map((file)=>{return file.path})
            }
            if(reqData[`${subMenuInitials}_imageDescription${i}`]){
                subMenuContent["imageDescription"] = reqData[`${subMenuInitials}_imageDescription${i}`]
            }
            subMenuContents.push(subMenuContent)
        }
        subMenu["contents"] = subMenuContents
        subMenus.push(subMenu)
    }
    menuObject["subMenus"] = subMenus

    //use updated menu object received from the client to handle the image and image description for main contents and sub menu
    const updatedMenuObject = JSON.parse(req.body.updatedMenuObject)

    //handling images and images description for main contents
    for(let i=0;i<menuObject.contents.length;i++){
        if(updatedMenuObject.contents[i]){
            if(menuObject.contents[i].imagePath && updatedMenuObject.contents[i].imagePath){
                menuObject.contents[i].imagePath = updatedMenuObject.contents[i].imagePath.concat(menuObject.contents[i].imagePath)
                menuObject.contents[i].imageDescription = updatedMenuObject.contents[i].imageDescription.concat(menuObject.contents[i].imageDescription)
            }else if(!menuObject.contents[i].imagePath && updatedMenuObject.contents[i].imagePath){
                menuObject.contents[i].imagePath = updatedMenuObject.contents[i].imagePath
                menuObject.contents[i].imageDescription = updatedMenuObject.contents[i].imageDescription
            }
        }
    }

    //handling images and images description for submenu 
    for(let i=0;i<menuObject.subMenus.length;i++){
        for(let j=0;j<menuObject.subMenus[i].contents.length;j++){
            if(updatedMenuObject.subMenus[i] && updatedMenuObject.subMenus[i].contents[j]){
                if(menuObject.subMenus[i].contents[j].imagePath && updatedMenuObject.subMenus[i].contents[j].imagePath){
                    menuObject.subMenus[i].contents[j].imagePath = updatedMenuObject.subMenus[i].contents[j].imagePath.concat(menuObject.subMenus[i].contents[j].imagePath)
                    menuObject.subMenus[i].contents[j].imageDescription = updatedMenuObject.subMenus[i].contents[j].imageDescription.concat(menuObject.subMenus[i].contents[j].imageDescription)
                }
                else if(!menuObject.subMenus[i].contents[j].imagePath && updatedMenuObject.subMenus[i].contents[j].imagePath){
                    menuObject.subMenus[i].contents[j].imagePath = updatedMenuObject.subMenus[i].contents[j].imagePath
                    menuObject.subMenus[i].contents[j].imageDescription = updatedMenuObject.subMenus[i].contents[j].imageDescription
                }
            }
        }
    }

    //update menu in database
    try{
        const updatedMenu = await Menu.findByIdAndUpdate(id,menuObject,{new:true})
        if(!updatedMenu){
            return res.status(404).json({success:false,message:"Cannot update menu"})
        }
        res.status(200).json({success:true,message:"Successfully updated menu",redirect:"/menu-details"})    
    }catch(err){
        res.status(500).json({success:false,message:"Internal Server Error",error:err.message})
    }  
}


//DELETE MENU
const deleteMenu = async (req,res)=>{
    try{
        const id = req.params.id 
        const deletedMenu = await Menu.findByIdAndDelete(id)
        if(deletedMenu){
            return res.status(200).json({success:true})
        }
    }catch(err){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}


//DELETE SUB MENU
const deleteSubMenu = async(req,res)=>{
    try{
        const menuId = req.params.menuId 
        const subMenuId = req.params.subMenuId 
        const deleteStatus = await Menu.findOneAndUpdate({ _id: menuId },{ $pull: { subMenus: { _id: subMenuId } } },{new:true})
        if(deleteStatus){
            return res.status(200).json({success:true})
        }
    }catch(err){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}


module.exports = {
    getMenu,
    addMenu,
    updateMenu,
    deleteMenu,
    deleteSubMenu
}