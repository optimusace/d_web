const User = require("../models/user")
const jwt = require("jsonwebtoken")

const getSignUpForm = (req,res)=>{
    res.render("SignUpForm")
}

const signup = async(req,res)=>{
    try{
        const {name,email,password} = req.body
        const newUser = await User.create({name,email,password})
        res.status(200).json({success:true,msg:"User created successfully"})
    }catch(err){
        const errors = {}
        if(err.code === 11000){
            errors['email'] = "Email already registered"
        }
        for(let key in err.errors){
            errors[key] = err.errors[key].message
        }
        res.status(400).json({success:false,message:"Unable to create user",errors:errors})
    }
}

const getLoginForm = (req,res)=>{
    res.render("LoginForm")
}

const login = async(req,res)=>{
    try{
        const {email,password} = req.body 
        const user = await User.login(email,password)
        const payload = {
            id:user._id,
            name:user.name
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:6*60*60})
        res.cookie("menu-user",token,{httpOnly:true, maxAge:6*60*60*1000})
        res.status(200).json({success:true,message:"Login successful"})
    }catch(err){
        res.status(404).json({success:false,message:"Unable to login",errors:err.message})
    }
}

module.exports = {
    getSignUpForm,
    signup,
    getLoginForm,
    login
}