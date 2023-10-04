const { Schema, model } = require("mongoose");

const WeightSchema = new Schema(
  { 
    weight: {
        type: Number,
        required: true,
    },
    weightType: {
        type: String,
        default: "pound",
        enum: ['pound', 'kilogram'],
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

const Weight = model("Weight", WeightSchema);

module.exports = Weight;
