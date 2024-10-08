const user_model = require('../models/user.model.js')
const jwt = require('jsonwebtoken')
const auth_config = require("../config/jwt.config.js")


// this is the code to check that the request is proper or not
 const verify = async(req,res,next)=>{
    try{
        // checking the name
        if(!req.body.name){
            return res.status(401).send({
                message: "failed! name was not found"
            })
        }
        // check for email
        if(!req.body.email){
            return res.status(400).send({
                message: "failed! email was not found"
            })
        }
        // check for userId
        if(!req.body.userId){
            return res.status(400).send({
                message: "failed! userId was not found"
            })
        }
        // check for userId alredy present
        const user = await user_model.findOne({userId: req.body.userId})
        if(user){
            return res.status(400).send({
                message: "userId alredy present"
            })
        }

        next()





    }catch(err){

        console.log("error",err)

        req.status(500).send({
            message: "error while validating the request body"
        })


    }

}

// this code is for that useriD or password is present or not
const signInverify = (req, res,next)=>{
    if(!req.body.userId){
        return res.status(400).send({
            messsage: "user not exist"
        })
    }

    if(!req.body.password){
        return res.status(400).status({
            message : "password is not present"

        })
    }

    next()
}


// this is for cheacking the token
const verifyToken = (req, res, next)=>{
    // check if the token is present in the heder
const token = req.headers['x-access-token']

if(!token){

    return res.status(403).send({
        message: "no token found : you are unaouthorised"

    })

}

    // if it is the valid token
// dekho yaha par pehle hamne check kiya kiya ki koi token header main hai ya nhi hai agar nhi hai to upar wala code agar hai to validate karenge 
// validate karne ke liye token ko lenge phir jwt se jo decret key banayi thi use lenge agar koi err aata hai to error print kar denge nhi to use decode karke pta karenge usme konsi user id hai agar id present hai to we can create the categories inn collection

   jwt.verify(token,auth_config.secret, async (err, decoded)=>{
    if(err){
        return res.status(401).send({
            message: "Unauthorised"
        })
    }
    const user = await user_model.findOne({ userId: decoded.id})
    if(!user){
        return res.status(402).send({
            message: "tou can't access the collectiom"
        })
    }
//set the info of user in req user
    req.user = user 
    // then move to the next step
    next()
})



}

// if userType is admin

const verifyAdmin = (req,res,next)=>{
   const user = req.user
    if(user && user.userType == "ADMIN"){
        next()
    }
}




module.exports={
    verifySIgnUp : verify,
    signinVerify : signInverify,
    verifyToken: verifyToken,
    verifyAdmin: verifyAdmin
}