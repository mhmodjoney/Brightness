const router = require("express").Router();
const City_controller = require("../controllers/city");

const { verifyToken, verifyTokenAndAdmin } = require("../routes/jwy_token");

router
  .route("/")
  .post(verifyTokenAndAdmin, City_controller.insert)
  .get(City_controller.getall);

router
  .route("/:id")
  .put(verifyTokenAndAdmin, City_controller.update)
  .delete(verifyTokenAndAdmin, City_controller.delete)
  .get(verifyTokenAndAdmin, City_controller.getByid);

module.exports = router;
