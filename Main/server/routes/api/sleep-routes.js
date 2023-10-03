const router = require('express').Router();

const {
  createSleep,
  getSleepById,
  deleteSleep,
} = require("../../controllers/sleep-controller");

// import middleware
const { authMiddleware } = require('../../utils/auth');

// on insominia: 
// choose Auth bearer, add response-body attribute and edit tag
// change request to the login api
// change filter to $. to find token
router.use(authMiddleware);

// /api/exercise/cardio
router.route("/sleep").post(createSleep);

// /api/exercise/cardio/:id
router.route("/sleep/:id").get(getSleepById).delete(deleteSleep);

module.exports = router;