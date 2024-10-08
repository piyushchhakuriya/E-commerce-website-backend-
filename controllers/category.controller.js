const category_model= require('../models/category.model.js')


// controller for creating the category
// the post that arrives like  POST localhost:8000/ecom/api/v1/categories
// and the body  
// {"name" : "houshold"
// "description": "this will have all the houshold items"}

exports.createCategory=async(req,res)=>{

// read the req from body


//create the category object

const cat_data={
    name: req.body.name,
    description: req.body.description
}

try{

    //insert into mongoDb
    const category  = await category_model.create(cat_data)
    return res.status(201).send(category)
}catch(err){
    console.log("error")
    return res.status(400).send({
        message: "there is somthin error"
    })
}


// return the responce of creter category


}
