
const {config,config_online,sql_sp} = require('../config/db_conect')

const User =require('../models/user')
const CryptoJS = require("crypto-js");


class Usercontroller{

    static async getall(req,res,next){
    
    const data = await User.getall()
  if(!data.recordset)
  {  res.status(500).json(data);
   next() }
 
res.send(data.recordset)

    next()

    }

    static async insert(req,res,next){

//  const data  = await User.create(req)
//   if(data.originalError)
//   {  res.status(500).json(data);
//    next() ;
//   }
//    else{
// res.send(data)
//   next()
// }
}

     static async update(req,res,next){

      //encrept  pass here bebeee ;
               const data = await User.update(req,req.params.id)
            if(data.originalError)
          {  res.status(500).json(data);
          next() ;
          }
          else{
        res.send(data)
          next()
        }}

         
static async delete(req,res,next){
const data  = await User.delete(req.params.id)
  if(data.originalError)
  {  res.status(500).json(data);
   next() ;
  }
   else{
res.send(data)
  next()
}
     }
}



module.exports = Usercontroller;