const exp = require('express')
const app = exp()


const userApp=require("./apis/userApi")
const mclient = require("mongodb").MongoClient;
require('dotenv').config()
const path = require('path')
app.use(exp.static(path.join(__dirname,'./build')))

const DBUrl = process.env.DATABASE_CONN_URL;


mclient.connect(DBUrl)
.then((client)=>{
    let dbObj = client.db("zakeerdb")

    let userCollectionObject = dbObj.collection("registrationDetails")
    app.set("userCollectionObject",userCollectionObject)
    console.log("connection established")
}).catch((e)=>{
    console.log(`error in conncetion: ${e}`)
})
app.use('/user-api',userApp)
const port = process.env.PORT
app.listen(port,()=>
    console.log(`server listening on port ${port}`)
)