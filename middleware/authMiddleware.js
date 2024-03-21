const jwt = require("jsonwebtoken")

const authenticate = (req,res,next)=>{

    const token = req.cookies["menu-user"]
    if(!token){
        return res.redirect("/user/login")
    }
    
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err){
            return res.redirect("/user/login")
        }
        req.user = decoded
        next()
    })
}

module.exports = {
    authenticate
}