// starting file of the prjoject


const express = require('express')
const mongoose = require('mongoose')
const app = express() // becuse here express is a function
const server_config = require('./config/server.config.js')
const db_config = require('./config/db.config.js')
const user_model = require('./models/user.model.js')
const bcrypt = require('bcryptjs')


app.use(express.json())// this called middleware


/*
create the admin user at starting of the application
if not already present
 */

// connection with mongo db
mongoose.connect(db_config.DB_URL)
const db = mongoose.connection


db.on("error" ,()=>{
    console.log("error while connecting the mongodb")
})

db.once("open",()=>{
    console.log("connected to mongodb")
    init()
})


async function init(){
    try{
        let user   = await user_model.findOne({userId:"ADmin"})
        if(user){
           console.log("admin is alredy present")
           return
        } 

    }catch(err){
        consoole.log(err)
    }
    
   
     
     

     try{

        user = await user_model.create({
            name:"piyush",
            userId:"ADmin",
            email:"piiyush26cs086@satiengg.in",
            userType:"CUSTOMER",
            password:bcrypt.hashSync("welcome1",8)  // encrypr the password

        })
        console.log("admin created")

     }catch(err){
        console.log(err);
     }

}

// stitch/ connect with routes


require("./routes/auth.routes.js")(app)

// stiche the category rpoutes in server 
require("./routes/category.routes.js")(app)

// strt the serrver

app.listen(server_config.PORT,()=>{
    console.log("server got strted at : ", server_config.PORT)

})
