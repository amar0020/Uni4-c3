const mongoose = require("mongoose");

const UserSchema= mongoose.Schema({
    firstName:{type:String,required:true, minlength:3,maxlength:150},
    lastName:{type:String,required:false, minlength:3,maxlength:150},
    age:{type:Number,required:true, min:1, max:150},
    email:{type:String, unique:true, required:true},
    

},
{
    timestamps:true,
})

const user = mongoose.model("user",UserSchema)

module.exports= user
