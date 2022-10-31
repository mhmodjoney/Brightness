              // if (!req.body.id) {
              //   res.sql_data="pleas add id  bitch"
              //   next()
              //   return
              // }
              // const input_select_one = [{"level" :"selectone"}, {  "id": req.body.id } , {  "name": "0" } , {  "state": "0" } ,{  "fk_city":  0 }]
              // const sp_name='sp_area'
              // //get old vlaue for rec by id
              // const rec_before_update = await sql_sp_dict(res,input_select_one,sp_name ) 
              // // add not existeng val in req.body by old rec we get 
              // forech_input_in_reqbody(rec_before_update,req)
              // req.body.level="update"
              // // update with the new val
              // sql_sp(res , req, next, sp_name)