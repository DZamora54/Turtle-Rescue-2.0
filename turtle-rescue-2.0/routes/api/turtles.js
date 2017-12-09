// const router = require("express").Router();
// const turtlesController = require("../../controllers/turtlesController");
// const isAuthenticated = require("../config/middleware/isAuthenticated");
// // Matches with "/api/turtles"
// router
//   .route("/users")
//   .get(isAuthenticated, turtlesController.findAll)
//   .post(turtlesController.create);
// // Matches with "/api/turtles/:id"
// router
//   .route("/:id")
//   .get(turtlesController.findById)
//   .put(turtlesController.update)
//   .delete(turtlesController.remove);
// module.exports = router;

router.route("/users")
  .post(controller.users.create)
  .get(isAuthenticated, controller.users.findOne);

router.route("/users/:id")
  .put(isAuthenticated, controller.users.update)
  .delete(isAuthenticated, controller.users.remove);

router.route("/location")
  .get(isAuthenticated, controller.gigs.findAll)
  .put(isAuthenticated, controller.gigs.update)
  .post(isAuthenticated, controller.gigs.create)
  .delete(isAuthenticated, controller.gigs.remove);

router.route("/location/:id/:authorId")
  .get(isAuthenticated, controller.location.findOne);

router.route("/comments")
  .get(isAuthenticated, controller.comments.findAll)
  .post(isAuthenticated, controller.comments.create)
  .delete(isAuthenticated, controller.comments.remove);

router.route("/comments/:id")
  .get(isAuthenticated, controller.comments.findOne)
  .put(isAuthenticated, controller.comments.update);

module.exports = router;