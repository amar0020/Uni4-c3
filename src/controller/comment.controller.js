const app = require("../index")

const comment= require("../model/comment");

app.post("", async (req,res)=>{
    const data = await comment.create(req.body)
})

module.exports = app