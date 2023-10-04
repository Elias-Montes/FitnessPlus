const router = require('express').Router();
//let Exercise = require('../../models/exercise.model');

// router.route('/').get((req, res) => {
//   Exercise.find()
//     .then(exercises => res.json(exercises))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;
//   const description = req.body.description;
//   const duration = Number(req.body.duration);
//   const date = Date.parse(req.body.date);

//   const newExercise = new Exercise({
//     username,
//     description,
//     duration,
//     date,
//   });

//   newExercise.save()
//   .then(() => res.json('Exercise added!'))
//   .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').get((req, res) => {
//   Exercise.findById(req.params.id)
//     .then(exercise => res.json(exercise))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//   Exercise.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Exercise deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   Exercise.findById(req.params.id)
//     .then(exercise => {
//       exercise.username = req.body.username;
//       exercise.description = req.body.description;
//       exercise.duration = Number(req.body.duration);
//       exercise.date = Date.parse(req.body.date);

//       exercise.save()
//         .then(() => res.json('Exercise updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

const {
  createResistance,
  getResistanceById,
  deleteResistance,
} = require("../../controllers/resistance-controller");

const {
  createCardio,
  getCardioById,
  deleteCardio,
} = require("../../controllers/cardio-controller");

// import middleware
const { authMiddleware } = require('../../utils/auth');

// on insominia: 
// choose Auth bearer, add response-body attribute and edit tag
// change request to the login api
// change filter to $. to find token
router.use(authMiddleware);

// /api/exercise/cardio
router.route("/cardio").post(createCardio);

// /api/exercise/cardio/:id
router.route("/cardio/:id").get(getCardioById).delete(deleteCardio);

// /api/exercise/resistance
router.route("/resistance").post(createResistance);

// /api/exercise/resistance/:id
router.route("/resistance/:id").get(getResistanceById).delete(deleteResistance);

module.exports = router;