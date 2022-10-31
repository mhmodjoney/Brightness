const express= require('express')
const dotenv =require ('dotenv')
const sql =require ('mssql')
const app = express()
const config=require('./config/db_conect')

dotenv.config()
app.use(express.json());

//console.log(config)
const userRoute = require("./routes/user");
const areaRoute = require("./routes/area");
const cityRoute = require("./routes/city");
const authRoute = require("./routes/auth");

app.use("/api/users", userRoute);
app.use("/api/area", areaRoute);
app.use("/api/city", cityRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000,() =>{
    console.log("server is running.....")
})