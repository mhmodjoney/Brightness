const router= require ('express').Router()
const Area_controller=require('../controllers/area')
const { verifyToken,verifyTokenAndAdmin} = require("../routes/jwy_token");

    router.route('/')
        .post(verifyTokenAndAdmin,Area_controller.insert)
        .get(Area_controller.getall)

    router.route('/:id')
        .put(verifyTokenAndAdmin,Area_controller.update)
        .delete(verifyTokenAndAdmin,Area_controller.delete)
        .get(verifyTokenAndAdmin,Area_controller.getByid)
        
module.exports= router