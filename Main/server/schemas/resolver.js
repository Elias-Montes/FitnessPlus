const { Cardio, Resistance, User, Sleep, Goals, Weight } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).pupulate('resistances').pupulate({
                path: 'resistances',
                populate: 'cadios'
            });
        },
        resistances: async () => {
            return await Resistance.find({}).populate('cardios');
        },
        cardios: async () => {
            return await Cardio.find({})
        }
    }
};

module.exports = resolvers;