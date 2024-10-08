// localhost:8000/ecom/api/v1/categories we have to create this api for category
const cat_controller = require('../controllers/category.controller.js')
const cat_middeleware = require("../middleware/auth.mw.js")
module.exports  = (app)=>{
    app.post("/ecom/api/v1/categories",[ cat_middeleware.verifyToken,cat_middeleware.verifyAdmin], cat_controller.createCategory)
}