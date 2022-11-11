const router = require("express").Router();
const sponser_controller = require("../controllers/sponser");
const { verifyToken, verifyTokenAndAdmin } = require("./jwy_token");

router
  .route("/")
  .post(verifyTokenAndAdmin, sponser_controller.insert)
  .get(sponser_controller.getall);

router
  .route("/:id")
  .put(verifyTokenAndAdmin, sponser_controller.update)
  .delete(verifyTokenAndAdmin, sponser_controller.delete)
  .get(verifyTokenAndAdmin, sponser_controller.getByid);

module.exports = router;
