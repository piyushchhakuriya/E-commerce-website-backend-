// isme sabse pehlr category ka naam hona chahiye and 
// description hona chahiye

const mongoose=require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description:{
        type:String,
        required: true
    }
},{timestamps:true, versionKey: false})

module.exports = mongoose.model("category", categorySchema)// here the collection name will be in plural 
