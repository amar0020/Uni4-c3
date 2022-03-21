const mongoose = require("mongoose");

const publicationSchema= mongoose.Schema({
    name:{type:String, required:true},
},
{
    timestamps:true
})

const publication = mongoose.model("publication",publicationSchema)

module.exports= publication