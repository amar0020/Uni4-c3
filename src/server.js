const app = require("./index")

const connect= require("./config/db");



app.listen(4321,async ()=>{
    try{
        await connect();
        console.log("listening")
    }
    catch(err){
        console.log(err)
    }
})