const { Weight, User } = require("../models");

module.exports = {
  // create weight
  createWeight({ body }, res) {
    Weight.create(body)
      .then((dbWeightData) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { weight: dbWeightData._id } },
          { new: true }
        )
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "Weight created but no user with this id!" });
        }
        res.json({ message: "Weight successfully created!" });
      })
      .catch((err) => res.status(500).json(err));
  },

  // get one Weight by id
  getWeightById({ params }, res) {
    Weight.findOne({ _id: params.id })
      .then((dbWeightData) => {
        if (!dbWeightData) {
          return res.status(404).json({ message: "No weight data found with this id!" });
        }
        res.json(dbWeightData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // delete weight data
  deleteWeight({ params }, res) {
    Weight.findOneAndDelete({ _id: params.id })
      .then((dbWeightData) => {
        if (!dbWeightData) {
          res.status(404).json({ message: "No cardio data found with this id!" })
        }
        // remove weifht on user data
        return User.findOneAndUpdate(
          { cardio: params.id },
          { $pull: { weight: params.id } },
          { new: true }
        )
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "Weight deleted but no user with this id!" });
        }
        res.json({ message: "Weight successfully deleted!" });
      })
      .catch((err) => res.status(500).json(err));
  },
};
