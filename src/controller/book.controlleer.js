const app = require("../index")

const book = require("../model/book")


app.post("", async (req,res)=>{
    const data = await book.create(req.body);
    res.send(data)
})


app.use("/:id", async (res,req)=>{
    const page = req.query

    const pagesize= req.query

    skip= (page-1).pagesize

    const data = book.findById("id").skip(skip).limit(pagesize)
    res.send(data)
})

module.exports = app