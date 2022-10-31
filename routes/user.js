const router= require ('express').Router()
const Usercontroller=require('../controllers/user')
const { verifyToken} = require("../routes/jwy_token");

router.get('/all',Usercontroller.getall );

//router.post('/',Usercontroller.insert );

router.put('/:id',Usercontroller.update)
router.delete('/:id',Usercontroller.delete)

module.exports= router