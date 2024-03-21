const User = require("../models/user")
const jwt = require("jsonwebtoken")

const signup = async(req,res)=>{
    try{
        const data = req.body
        const newUser = await User.create(data)
        res.status(200).json({success:true,msg:"User created successfully"})
    }catch(err){
        const errors = {}
        if(err.code === 11000){
            errors['email'] = "Email already registered"
        }
        for(let key in err.errors){
            errors[key] = err.errors[key].message
        }
        res.status(404).json({success:false,message:"Unable to create user",errors:errors})
    }
}

const login = async(req,res)=>{
    try{
        const {email,password} = req.body 
        const user = await User.login(email,password)
        const payload = {
            id:user._id,
            name:user.name
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:24*60*60})
        res.status(200).json({success:true,message:"Login successful",token:token})
    }catch(err){
        res.status(404).json({success:false,message:"Unable to login",errors:err.message})
    }
}

module.exports = {
    signup,
    login
}