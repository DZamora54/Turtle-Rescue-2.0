const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const turtleSchema = new Schema({
  _id: {type: Schema.Types.ObjectId, required: true},
  dateTimeReported: { type: Date, default: Date.now },
  city: { type: String, required: true },
  state: { type: String, required: true, maxlength: 2, minlength: 2 },
  coordinates: { type: String, required: true },
  comments: { type: String },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true }
});

const Turtle = mongoose.model("Turtle", turtleSchema);

module.exports = Turtle;
