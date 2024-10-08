const mongoose = require('mongoose')
/*

name
userId
Password
email
usertype

*/

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true 
    },

    userId:{
        type: String,
        require: true,
        unique: true 
    },

    password :{
        type: String,
        require: true 

    },

    email:{
        type: String,
        require:true,
        lowerCase: true,
        minLength: 10,
        unique: true
    },

    userType:{
        type: String,
        require: true,
        default:"CUSTOMERr",
        enum: ["CUSTOMER", "ADMIN"]
    }




}, {versionKey:false,timestamp:true})

module.exports = mongoose.model("USER", userSchema)