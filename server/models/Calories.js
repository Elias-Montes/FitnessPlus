const { Schema, model } = require("mongoose");

const CaloriesSchema = new Schema(
  { 
    calories: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  }
);

const Calories = model("Calories", CaloriesSchema);

module.exports = Calories;
