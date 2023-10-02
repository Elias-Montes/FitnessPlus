const { Sleep, User } = require("../models");

module.exports = {
  // create Sleep
  createSleep({ body }, res) {
    Sleep.create(body)
      .then((dbSleepData) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { sleep: dbSleepData._id } },
          { new: true }
        )
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "Sleep created but no user with this id!" });
        }
        res.json({ message: "Sleep successfully created!" });
      })
      .catch((err) => res.status(500).json(err));
  },

  // get one Sleep by id
  getSleepById({ params }, res) {
    Sleep.findOne({ _id: params.id })
      .then((dbSleepData) => {
        if (!dbSleepData) {
          return res.status(404).json({ message: "No Sleep data found with this id!" });
        }
        res.json(dbSleepData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // delete Sleep data
  deleteSleep({ params }, res) {
    Sleep.findOneAndDelete({ _id: params.id })
      .then((dbSleepData) => {
        if (!dbSleepData) {
          res.status(404).json({ message: "No Sleep data found with this id!" })
        }
        // remove weifht on user data
        return User.findOneAndUpdate(
          { sleep: params.id },
          { $pull: { sleep: params.id } },
          { new: true }
        )
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "Sleep deleted but no user with this id!" });
        }
        res.json({ message: "Sleep successfully deleted!" });
      })
      .catch((err) => res.status(500).json(err));
  },
};
