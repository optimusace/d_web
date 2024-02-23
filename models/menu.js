const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    name:String,
    link:String,
    contents:[{
        heading:String,
        subHeading:String,
        shortDescription:String,
        longDescription:String,
        pageLocation:String,
        imagePath:Array,
        imageDescription:Array
    }],
    subMenus:[{
        name:String,
        link:String,
        contents:[{
            heading:String,
            subHeading:String,
            shortDescription:String,
            longDescription:String,
            pageLocation:String,
            imagePath:Array,
            imageDescription:Array
        }]
    }]
},{timestamps:true})

const Menu = mongoose.model("Menu",menuSchema)

module.exports = Menu
