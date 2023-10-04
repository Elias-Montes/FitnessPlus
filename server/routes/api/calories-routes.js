const router = require('express').Router();

const {
  createCalories,
  getCaloriesById,
  deleteCalories,
} = require("../../controllers/calories-controller");

// import middleware
const { authMiddleware } = require('../../utils/auth');

// on insominia: 
// choose Auth bearer, add response-body attribute and edit tag
// change request to the login api
// change filter to $. to find token
router.use(authMiddleware);

// /api/exercise/cardio
router.route("/calories").post(createCalories);

// /api/exercise/cardio/:id
router.route("/calories/:id").get(getCaloriesById).delete(deleteCalories);

module.exports = router;