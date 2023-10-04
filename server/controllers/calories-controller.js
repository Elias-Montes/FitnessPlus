const { Calories, User } = require("../models");

module.exports = {
  // create Calories
  createCalories({ body }, res) {
    Calories.create(body)
      .then((dbCaloriesData) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { calories: dbCaloriesData._id } },
          { new: true }
        )
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "Calories created but no user with this id!" });
        }
        res.json({ message: "Calories successfully created!" });
      })
      .catch((err) => res.status(500).json(err));
  },

  // get one Calories by id
  getCaloriesById({ params }, res) {
    Calories.findOne({ _id: params.id })
      .then((dbCaloriesData) => {
        if (!dbCaloriesData) {
          return res.status(404).json({ message: "No Calories data found with this id!" });
        }
        res.json(dbCaloriesData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // delete Calories data
  deleteCalories({ params }, res) {
    Calories.findOneAndDelete({ _id: params.id })
      .then((dbCaloriesData) => {
        if (!dbCaloriesData) {
          res.status(404).json({ message: "No Calories data found with this id!" })
        }
        // remove weifht on user data
        return User.findOneAndUpdate(
          { calories: params.id },
          { $pull: { calories: params.id } },
          { new: true }
        )
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "Calories deleted but no user with this id!" });
        }
        res.json({ message: "Calories successfully deleted!" });
      })
      .catch((err) => res.status(500).json(err));
  },
};
