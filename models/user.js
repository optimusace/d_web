const mongoose = require("mongoose")
const validator = require("validator")
const brcypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name:{
        required:[true,"Name must be provided"],
        type:String,
        trim:true,
        minLength:[6,"Name must be atleast 6 characters"],
        maxLength:[20,"Name cannot exceed 20 characters"]
    },
    email:{
        required:[true,"Email must be provided"],
        type:String,
        trim:true,
        unique:true,
        validate:{
            validator:(value)=>{
                return validator.isEmail(value)
            },
            message:"Provide a valid email"
        }
    },
    password:{
        required:[true,"Password must be provided"],
        type:String,
        minLength:[8,"Password must be atleast 8 characters"],
        maxLength:[15,"Password cannot exceed 15 characters"]
    }
},{timestamps:true})

userSchema.pre("save",async function(next){
    const saltRounds = 10
    const salt = await brcypt.genSalt(saltRounds)
    this.password = await brcypt.hash(this.password,salt)
    next()
})

userSchema.statics.login = async function(email,password){
    const user = await this.findOne({email:email})
    if(!user){
        throw Error("Invalid login credentails")
    }
    const result = await brcypt.compare(password,user.password)
    if(!result){
        throw Error("Invalid login credentails")
    }
    return user
}

const User = mongoose.model("User",userSchema)

module.exports = User