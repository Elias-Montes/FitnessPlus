const router = require("express").Router();
const userRoutes = require("./user-routes");
const exerciseRoutes = require("./exercise-routes");
const weightRoutes = require("./weight-routes");
const goalsRoutes = require("./goals-routes");
const sleepRoutes = require("./sleep-routes");
const caloriesRoutes = require("./calories-routes");

router.use("/user", userRoutes);
router.use("/exercise", exerciseRoutes);
router.use("/weight", weightRoutes);
router.use("/goals", goalsRoutes);
router.use("/sleep", sleepRoutes);
router.use("/calories", caloriesRoutes);

module.exports = router;
