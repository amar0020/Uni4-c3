const mongoose= require("mongoose");


const bookSchema = mongoose.Schema({
    likes:{type:Number, default:0,max:1},
    coverImage:{type:String, required:true, unique:true},
    content:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId, required:true},
    publication:{type:mongoose.Schema.Types.ObjectId, required:true},
    comment:{type:mongoose.Schema.Types.ObjectId,required:true}
},
{
    timestamps:true
})

const book = mongoose.model("book",bookSchema)

module.exports= book
