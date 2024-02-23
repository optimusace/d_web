const mongoose = require("mongoose")
const validator = require("validator")

const memberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name required"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email required"],
        unique:true,
        trim:true,
        validate:{
            validator:(value)=>{
                return validator.isEmail(value)
            },
            message:"Email is invalid"
        }

    },
    position:{
        type:String,
        required:[true,"Position required"],
        trim:true
    }
})

memberSchema.pre("save",function(next){
    this.name = validator.escape(this.name)
    this.email = validator.escape(this.email)
    this.position = validator.escape(this.position)
    next()
})

const Member = mongoose.model("Member",memberSchema)

module.exports = Member