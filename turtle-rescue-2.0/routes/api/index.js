const router = require("express").Router();
const turtleRoutes = require("./turtles");
// turtle routes
router.use("/turtles", turtleRoutes);
module.exports = router;
