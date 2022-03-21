const express = require("express");
const app = require("../index")

const user = require("../model/user")



app.post("", async (res,req)=>{
 const data = await user.create(req.body);
})


module.exports = app
