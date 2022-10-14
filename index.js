const express= require('express')
const app = express()
const mongoose =require ('mongoose')
const dotenv =require ('dotenv')

dotenv.config()
app.use(express.json());



app.listen(process.env.PORT || 5000,() =>{
    console.log("server is running.....")
})