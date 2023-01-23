const exp = require('express');
const userApp = exp.Router()
const expressAsyncHandler = require("express-Async-Handler")


require("dotenv").config()

//to hash the password
const bcryptjs= require('bcryptjs')
//to create token
const jwt = require('jsonwebtoken')
//to extract body
userApp.use(exp.json())

userApp.post('/create-user',expressAsyncHandler(async(request,response)=>{
    let userCollectionObject=request.app.get("userCollectionObject");

    let userObj = request.body;
      
    let userOfDb = await userCollectionObject.findOne({username:userObj.username});

 
    if(userOfDb!==null)
    {
        response.send({message:"user name already taken.."})
    }
    else
    {
     let hashedpassword=await bcryptjs.hash(userObj.password,6);
     userObj.password = hashedpassword;
     await userCollectionObject.insertOne(userObj)
     response.send({message:"new user created"})
    }

}))
userApp.post('/login',expressAsyncHandler(async(request,response)=>{
    let userCollectionObject=request.app.get("userCollectionObject");

    let userCredObj = request.body;
      
    let userOfDb = await userCollectionObject.findOne({username:userCredObj.username});

 
    if(userOfDb==null)
    {
        response.send({message:"invalid username"})
    }
    else
    {
      let status = await bcryptjs.compare(userCredObj.password,userOfDb.password);
      if(status==false)
      {
        response.send({message:"invalid password"})
      }
      else{
        let token =jwt.sign({username:userOfDb.username},process.env.SECRET_KEY,{expiresIn:60})
        //send token
        response.send({message:"login success",payload:token,userObj:userOfDb})
      }
    }

})
)


module.exports = userApp;