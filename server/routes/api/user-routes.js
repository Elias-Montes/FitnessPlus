const router = require('express').Router();
//let User = require('../../models/user.model');

const { createUser, login, getSingleUser } = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
// /api/user for user signup
router.route("/").post(createUser)

// /api/user/login for user login
router.route("/login").post(login);

// /api/user/me to get single user data
router.route('/me').get(authMiddleware, getSingleUser);

// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;

//   const newUser = new User({username});

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;
