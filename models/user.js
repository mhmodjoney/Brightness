const {config,config_online,update_query,sql_sp,sql_sp_dict,forech_input_in_reqbody,sql_sp2, sql_sp_dict_null} = require('../config/db_conect')
   const sp_name='sp_User'

 const input2 = {level :"0",id:0,name:0,
  state:0,email:0,password:0,phone:0,birth_date:0,gender:0,
last_seen:0,type:0,fcm_token:0,fk_area:0,fk_city:0}

exports.NAME= "selectbyname";
exports.ID = "selectbyname";
exports.EMAIL = "selectbyname";

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


exports.getbyid= async (id) =>{

const input3= JSON.parse(JSON.stringify(input2))
input3.level="selecone"
input3.id=id
  const  data= await sql_sp_dict_null(input3,sp_name)
  return data

}

exports.getbyname= async (name) =>{

const input3= JSON.parse(JSON.stringify(input2))
input3.level="selectbyname"
input3.name=name
  const  data= await sql_sp_dict_null(input3,sp_name)
  return data

}


exports.getbyemail= async (email) =>{
const input3= JSON.parse(JSON.stringify(input2))
input3.level="selectbyemail"
input3.email=email
  const  data= await sql_sp_dict_null(input3,sp_name)
  return data

}

exports.update = async (req,id) => {
 const  data= await update_query(req.body ,  id, "[dbo].[user]")
    return data;
}


exports.delete = async (id) => {
const input3= JSON.parse(JSON.stringify(input2))
input3.level="delete"
input3.id=id

  const  data= await sql_sp_dict(input3,sp_name)
  return data
}
