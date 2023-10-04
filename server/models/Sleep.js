const { Schema, model } = require("mongoose");

const SleepSchema = new Schema(
  { 
    sleep: {
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

const Sleep = model("Sleep", SleepSchema);

module.exports = Sleep;
