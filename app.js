require("dotenv").config()
const express = require("express")
const connectDB = require("./config/mongo")
const memberRoutes = require("./routes/memberRoutes")
const menuRoutes = require("./routes/menuRoutes")
const contentRoutes = require("./routes/contentRoutes")
const cors = require("cors")
const Menu = require("./models/menu")

const app = express()
const port = process.env.PORT 

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use("/uploads",express.static("uploads"))

app.set("view engine","ejs")
app.set("views","./views")

//ROUTES
app.get("/menu-content-form",(req,res)=>{
    res.render("contentForm")
})

app.get("/menu-details",async (req,res)=>{
    try{
        const menu = await Menu.find()
        res.render("menuDetails",{menu,checkValue:"check"})
    }catch(err){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
})

app.delete("/delete-menu/:id",async (req,res)=>{
    try{
        const id = req.params.id 
        const deletedMenu = await Menu.findByIdAndDelete(id)
        if(deletedMenu){
            return res.status(200).json({success:true})
        }
    }catch(err){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
})
app.delete("/delete-sub-menu/:mainId/:subMenuId",async (req,res)=>{
    try{
        const menuId = req.params.mainId 
        const subMenuId = req.params.subMenuId 
        const deleteStatus = await Menu.updateOne({ _id: menuId },{ $pull: { subMenus: { _id: subMenuId } } })
        if(deleteStatus){
            return res.status(200).json({success:true})
        }
    }catch(err){
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
})

app.use("api/v1/member",memberRoutes)
app.use("/api/v1/menu",menuRoutes)
app.use(contentRoutes)



//HANDLE 404 REQUEST
app.use((req,res)=>{
    res.status(404).render("error404")
})

const startServer = async()=>{
    try{
        await connectDB(process.env.MONGODB_CONNECT)
        app.listen(process.env.PORT,()=>{
            console.log("Server started on port : ",process.env.PORT)
        })
    }catch(e){
        console.log("Sorry!!! Cannot establish connection to the database")
    }
}
startServer()
