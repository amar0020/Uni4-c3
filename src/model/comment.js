const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    body:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,required:true}
},
{
    timestamps:true
})

const comment = mongoose.model("comment",commentSchema)

module.exports= comment