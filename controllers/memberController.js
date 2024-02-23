const Member = require("../models/member")

//GET ALL MEMBERS
const getMembers = (req,res)=>{
    Member.find()
    .then((members)=>{
        if(members.length > 0 ){
            res.status(200).json({success:true,data:members})
        }else{
            res.status(404).json({success:false,message:"No members found"})
        }
    })
    .catch((err)=>{
        res.status(500).json({success:false,message:"Internal Server Error"})
    })
}

//ADD MEMBER
const addMember = (req,res)=>{
    if(Object.keys(req.body).length === 0){
        return res.status(400).json({success:false,message:"Invalid request body."})
    }
    const member = req.body 
    Member.create(member)
    .then((savedMember)=>{
        res.status(201).json({success:true,message:"Member created successfully",data:savedMember})
    })
    .catch((err)=>{
        res.status(500).json({success:false,message:"Error saving member to the database",error:err})
    })
}

//UPDATE THE MEMBER USING PROVIDED ID AND DATA
const updateMember = (req,res)=>{
    if(Object.keys(req.body).length === 0){
        return res.status(400).json({success:false,message:"Invalid request body"})
    }
    const memberId = req.params.id
    const updatedData = req.body 
    Member.findByIdAndUpdate(memberId,updatedData)
    .then((updatedMember)=>{
        if(!updatedMember){
            return res.status(404).json({success:false,message:"Member not found"})
        }
        res.status(200).json({success:true,message:"Member updated successfully",data:updatedMember})
    })
    .catch((err)=>{
        res.status(500).json({success:false,message:"Error updating member",error:err})
    })
}

//DELETE THE MEMBER USING ID
const deleteMember = (req,res)=>{
    const memberId = req.params.id 
    Member.findByIdAndDelete(memberId)
    .then((deletedMember)=>{
        if(!deletedMember){
            return res.status(404).json({success:false,message:"Member not found"})
        }
        res.status(200).json({success:true,message:"Member deleted successfully",data:deletedMember})
    })
    .catch((err)=>{
        res.status(500).json({success:false,message:"Error deleting member",error:err})
    })
}

module.exports = {
    getMembers,
    addMember,
    updateMember,
    deleteMember
}