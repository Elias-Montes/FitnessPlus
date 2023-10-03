const { Cardio, Resistance, User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("resistances").populate({
        path: "resistances",
        populate: "cardio",
      });
    },
    resistances: async () => {
      return await Resistance.find({}).populate("cardios");
    },
    cardios: async () => {
      return await Cardio.find({});
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
