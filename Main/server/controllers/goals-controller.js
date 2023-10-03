const { Goals, User } = require("../models");

module.exports = {
  // create Goals
  createGoals({ body }, res) {
    Goals.create(body)
      .then((dbGoalsData) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { goals: dbGoalsData._id } },
          { new: true }
        )
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "Goals created but no user with this id!" });
        }
        res.json({ message: "Goals successfully created!" });
      })
      .catch((err) => res.status(500).json(err));
  },

  // get one Goals by id
  getGoalsById({ params }, res) {
    Goals.findOne({ _id: params.id })
      .then((dbGoalsData) => {
        if (!dbGoalsData) {
          return res.status(404).json({ message: "No Goals data found with this id!" });
        }
        res.json(dbGoalsData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // delete Goals data
  deleteGoals({ params }, res) {
    Goals.findOneAndDelete({ _id: params.id })
      .then((dbGoalsData) => {
        if (!dbGoalsData) {
          res.status(404).json({ message: "No goals data found with this id!" })
        }
        // remove goals on user data
        return User.findOneAndUpdate(
          { goals: params.id },
          { $pull: { goals: params.id } },
          { new: true }
        )
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "Goals deleted but no user with this id!" });
        }
        res.json({ message: "Goals successfully deleted!" });
      })
      .catch((err) => res.status(500).json(err));
  },
};
