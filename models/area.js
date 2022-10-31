const {update_query,sql_sp_dict,sql_sp2} = require('../config/db_conect')
   const sp_name='sp_area'
  const input2 = {"level" :"0",id:0,name:0,state:0,fk_city:0}
const table_name= "area"

exports.getall= async () =>{
  
const input3= JSON.parse(JSON.stringify(input2))
input3.level="select"
  const  data= await sql_sp_dict(input3,sp_name)
  return data

}

exports.create = async (req) => {
 
req.body.level='insert'
req.body.id=0
  const  data= await sql_sp2(req ,sp_name)
  return data
}


exports.getone= async (id) =>{
  
const input3= JSON.parse(JSON.stringify(input2))
input3.level="selectone"
input3.id=id
  const  data= await sql_sp_dict(input3,sp_name)
  return data

}


exports.update = async (req,id) => {
 const  data= await update_query(req.body ,  id, table_name)
    return data;
}


exports.delete = async (id) => {
 

const input3= JSON.parse(JSON.stringify(input2))
input3.level="delete"
input3.id=id
  const  data= await sql_sp_dict(input3,sp_name)
  return data
}