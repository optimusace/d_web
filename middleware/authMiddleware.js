const jwt = require("jsonwebtoken")

const authenticate = (req,res,next)=>{
    const authHeader = req.headers.authorization 
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({success:false,message:"Unauthorized : No token provided"})
    }
    const token = authHeader.split(" ")[1]
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err){
            return res.status(401).json({success:false,message:"Unauthorized : Invalid token"})
        }
        req.user = decoded 
        next()
    })
    next()
}

module.exports = {
    authenticate
}