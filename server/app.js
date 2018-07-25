const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes/')
const app = express(); // this is initialization of express app
const router = express.Router() //this is create router
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/mernstack"   // initialize mongodb's config and mernstack is db name

/** connect to MongoDB database */
try{
     mongoose.connect(url, {

     })
}catch (error){
    console.log(error)
}

let port = 5000 || process.env.PORT     // this is server port 

routes(router)

app.use(cors())  // this is let app can use from every domains
app.use(bodyParser.json())

app.use('/api',router)  // this is declared routes by premix api

/** start server */
app.listen(port,()=>{
    console.log(`Server started at port : ${port}`);
})