// jab koi request aati hai to wo sabse pehle aati hai express server par jiska namm hai app
// to hame POST  localhost:8888/ecom/api/v1/auth/signup  ke liye uri banan hai

const authcontroller = require("../controllers/auth.controller.js")
const mw = require('../middleware/auth.mw.js')

module.exports = (app)=>{
    app.post("/ecom/api/v1/auth/signup",[mw.verifySIgnUp], authcontroller.signup)  // agar koi bhi post call aati hai is uri par tab aap controller main signup karwa do
    

  // define route for signIn call

  app.post("/ecom/api/auth/signin",[mw.signinVerify],authcontroller.signIn)


}

