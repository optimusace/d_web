const mongoose = require("mongoose")

const connectDB = async(connectionString)=>{
    try{
        const mongooseInstance = await mongoose.connect(connectionString)
        console.log("Successfully established connection to database")
        return mongooseInstance
    }catch(e){
        console.log(e)
        console.log("Error connecting to database : ",e.message)
        throw e
    }
}

module.exports = connectDB