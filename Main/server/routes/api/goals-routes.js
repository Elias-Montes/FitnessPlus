const router = require('express').Router();

const {
  createWeight,
  getWeightById,
  deleteWeight,
} = require("../../controllers/goals-controller");

// import middleware
const { authMiddleware } = require('../../utils/auth');

// on insominia: 
// choose Auth bearer, add response-body attribute and edit tag
// change request to the login api
// change filter to $. to find token
router.use(authMiddleware);

// /api/exercise/cardio
router.route("/weight").post(createWeight);

// /api/exercise/cardio/:id
router.route("/weight/:id").get(getWeightById).delete(deleteWeight);

module.exports = router;