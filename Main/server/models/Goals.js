const { Schema, model } = require("mongoose");

const GoalsSchema = new Schema(
  { 
    goal: {
        type: String,
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

const Goals = model("Goals", GoalsSchema);

module.exports = Goals;
