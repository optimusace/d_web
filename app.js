require("dotenv").config()
const express = require("express")
const connectDB = require("./config/mongo")
const memberRoutes = require("./routes/memberRoutes")
const menuRoutes = require("./routes/menuRoutes")
const contentRoutes = require("./routes/contentRoutes")
const renderRoutes = require("./routes/renderRoutes")
const authRoutes = require("./routes/authRoutes")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express() 

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use("/uploads",express.static("uploads"))

app.set("view engine","ejs")
app.set("views","./views")

//ROUTES
app.use("/user",authRoutes)
app.use("/api/member",memberRoutes)
app.use("/api/menu",menuRoutes)
app.use(renderRoutes)
app.use(contentRoutes)

//HANDLE 404 REQUEST
app.use((req,res)=>{
    res.status(404).render("error404")
})

const startServer = async()=>{
    try{
        await connectDB(process.env.MONGODB)
        app.listen(process.env.PORT,()=>{
            console.log("Server started on port : ",process.env.PORT)
        })
    }catch(e){
        console.log("Sorry! Database connection failed. Unable to start server.")
    }
}
startServer()
