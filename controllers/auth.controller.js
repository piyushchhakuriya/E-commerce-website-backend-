// in controller now we have to write a logic to register a user
const bcrypt = require('bcryptjs') 
const user_model = require('../models/user.model.js')
const jwt = require('jsonwebtoken')
const secret = require("../config/jwt.config.js")


exports.signup = async (req,res)=>{
    /**
     * logic to create the user
     */

    // 1.  read the request body
    const request_body = req.body

    //2.   insert the data in the users collection in mongodb
    
    const userObj  ={
        name: request_body.name,
        userId: request_body.userId,
        email: request_body.email,
        userType: request_body.userType,
        password: bcrypt.hashSync(request_body.password+8)
    }

    try{

        const user_created  = await user_model.create(userObj)
        // return this user
        res.status(201).send(user_created)// saomthin is succesfully created



    }catch(err){
        console.log(err)
        res.status(500).send({
            message: "some error"
        })
    }


    // 3. return the responce back to the user 

}



// ab hame sign in ke liye logic likhna hai

exports.signIn =async (req,res)=>{
    // check the user is present in the system

     const user= await user_model.findOne({userId : req.body.userId})

     if(user==null){

       res.status(400).send({
        message : "userId is wrong"
       })
     }

    // check that password is correct 
    const password  = bcrypt.compareSync(req.body.password, user.password)
    if(password==null){
        res.status(401).send({
            message:"password is incorrect"
        })
    } 

    


    // using jwt we will creat the acces token with a given TTL and return

    const token = jwt.sign({id: user.userId}, secret.secret,{  // there is a method in jwt the name is jwt.sign by which we can sign in with the help of userid  isme hame teen cheez deni padti hain first one is data and second is secret token and third is time

        expiresIn:120
    })

    res.status(200).send({
        name: user.name,
        userid: user.userId,
        email: user.email,
        userType: user.userType,
        accessToken: token
    })
// iske baad hame middle ware bhi banana padega agar userid ya password present nhi hai



}



