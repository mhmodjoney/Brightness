
const Area =require('../models/area')

class Area_controller{

static  async getall(req,res,next){
const s  = await Area.getall()
  if(!s.recordset)
  {  res.status(500).json(s);
   next() }
 
res.send(s.recordset)

    next()
    } 


static  async getByid(req,res,next){
const s  = await Area.getone(req.params.id)
  if(!s.recordset)
  {  res.status(500).json(s);
   next() }
 console.log(req.token_user)
  res.send(s.recordset)

    next()
    } 


static async insert(req,res,next){
const data  = await Area.create(req)
  if(data.originalError)
  {  res.status(500).json(data);
   next() ;
  }
   else{
res.send(data)
  next()
}
     }

     
static async update(req,res,next){
          const data = await Area.update(req,req.params.id)
            if(data.originalError)
          {  res.status(500).json(data);
          next() ;
          }
          else{
        res.send(data)
          next()
        }

              } 
 
static async delete(req,res,next){
const data  = await Area.delete(req.params.id)
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


module.exports =  Area_controller;