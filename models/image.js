const mongoose = require("mongoose")
const validator = require("validator")

const imageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    path:{
        type:string,
        required:true,
        trim:true
    },
    description:{
        type:String,
        //required:true,
        trim:true
    }
})

imageSchema.pre("save",function(next){
    this.name = validator.escape(this.name)
    this.path = validator.escape(this.path)
    this.description = validator.escape(this.description)
})

const Image = mongoose.model("Image",imageSchema)

module.exports = Image