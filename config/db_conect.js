const sql = require('mssql')
var config = {  
    server: 'DESKTOP-MVB8N7J',  //update me
    authentication: {
        type: 'default',
        options: {
          // trustedConnection: true,
            userName: 'mj2', //update me
            password: '12345678'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
         encrypt: false,
        database: 'Brightness'  //update me
    }
}; 
const config_online = {  
    server: process.env.server,  //update me
    authentication: {
        type: 'default',
        options: {
          // trustedConnection: true,
            userName: process.env.admin, //update me
            password: process.env.db_pass  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
         encrypt: false,
        database:process.env.db  //update me
    }
}; 

var dict = {
    number: sql.Int,
    string: sql.VarChar(300),
    "string":  sql.VarChar(300),
     };

const sql_sp = async function(res , req, next, sp_name) {
    const conn = await new sql.connect(await config);

         console.log(typeof(process.env.admin))
    var request =  new sql.Request(conn);
     
      
    for (const [key, value] of Object.entries(req.body)) {
      request.input(key, dict[typeof(value)], value);
    }
    
  const resp = await  request.execute(sp_name)
  .catch(function(err) {
     res.sql_data=err
        next()   
      });
try{
    res.sql_data=resp.recordset}
    catch{
      res.sql_data="empty"
    }
    next()
}
  
  async function sql_query(dict2,query) {
    try{
    var err1=null
    var conn = await new sql.connect(config);
    var request =  new sql.Request(conn);
   const resp=   await  request.query(query)
     return resp}
    catch(err){ return err }
 
  }

  
   var update_query =  async function (obj,id,table) {
try{
    var sql_obj=""
     // make req.bode (obj) =>  sql frindly (: => =)
  for (const [key, value] of Object.entries(obj)) {
    if(key=="id") continue
    if(key=="state") continue
      sql_obj=sql_obj+key+"="+"'"+value+"'"+","
    }
    //remove last ,
sql_obj = sql_obj.substring(0, sql_obj.length - 1);

 //   var query = ` UPDATE ${table} SET ${sql_obj} WHERE id =${id} `;//and state!='deleted'
    
    var query = `   
  declare @dd varchar(20)
  select @dd=state from ${table} where id =${id}
  if @dd!='deleted' 
    begin
    UPDATE ${table} SET ${sql_obj} WHERE id =${id} 
    end
	      `;//and state!='deleted'

    var conn = await new sql.connect(config);
    var request =  new sql.Request(conn);
   const resp=   await  request.query(query,[obj, obj.id])
  
    return resp  }
   catch(err){ return err }
  
  }
 

  var sql_sp_dict = async function( dict2, sp_name) {
    try{
    var err1=null
    var conn = await new sql.connect(config);
    var request =  new sql.Request(conn);
     
      

  
      for (const [key, value] of Object.entries(dict2)) {
        //console.log(value,key);
        request.input(key, dict[typeof(value)], value);
      }
      
     const resp =await request.execute(sp_name)
       return resp  }

      catch(err){ return err }
  }

    var sql_sp_dict_null = async function( dict2, sp_name) {
    try{

    var conn = await new sql.connect(config);
    var request =  new sql.Request(conn);
     

  
      for (const [key, value] of Object.entries(dict2)) {
        //console.log(value,key);
        request.input(key, dict[typeof(value)], value);
      }
      
     const resp =await request.execute(sp_name)
       return resp  }

      catch(err){ return null }
  }

  const sql_sp2 = async function( req, sp_name) {
try{
    const conn = await new sql.connect( config);

        // console.log(typeof(process.env.admin))
    var request =  new sql.Request(conn);
     
      
    for (const [key, value] of Object.entries(req.body)) {
      request.input(key, dict[typeof(value)], value);
    }
    
  const resp = await  request.execute(sp_name)
      return resp}

  catch(err) {return err}
  



 
}

  function forech_input_in_reqbody(input,req) {
    input.forEach((x ) => {
  
    for (const key in x) {
     key in req.body ? req.body.key = x[key] : req.body[key] = x[key]}});
  
    delete req.body[undefined];
    delete req.body["key"];
  }


module.exports={ config,config_online,sql_sp_dict_null,sql_sp,sql_query,sql_sp_dict,forech_input_in_reqbody,sql_sp2,update_query};