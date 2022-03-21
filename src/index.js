const express = require("express");

const mongoose = require("mongoose")

const usercontroller= require("./controller/user.controller");

const bookcontroller = require("./controller/book.controlleer")

const commentcontroller = require("./controller/comment.controlleer")



const app = express();



app.use("user",usercontroller);

app.use("books",bookcontroller);

app.use("comment", commentcontroller);









module.exports= app