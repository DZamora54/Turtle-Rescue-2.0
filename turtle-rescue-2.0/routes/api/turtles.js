const router = require("express").Router();
const turtlesController = require("../../controllers/turtlesController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");
// // Matches with "/api/turtles"
router
  .route("/")
  .get(isAuthenticated, turtlesController.findAll)
  .post(turtlesController.create);
// Matches with "/api/turtles/:id"
router
  .route("/:id")
  .get(isAuthenticated, turtlesController.findById)
  .put(turtlesController.update)
  .delete(turtlesController.remove);
module.exports = router;


module.exports = router;