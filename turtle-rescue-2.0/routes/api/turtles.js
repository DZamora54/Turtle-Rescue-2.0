const router = require("express").Router();
const turtlesController = require("../../controllers/turtlesController");
// Matches with "/api/turtles"
router
  .route("/")
  .get(turtlesController.findAll)
  .post(turtlesController.create);
// Matches with "/api/turtles/:id"
router
  .route("/:id")
  .get(turtlesController.findById)
  .put(turtlesController.update)
  .delete(turtlesController.remove);
module.exports = router;
