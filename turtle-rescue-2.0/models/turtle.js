const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const turtleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  dateTimeReported: { type: Date, default: Date.now },
  location: { type: String, required: true },
  coordinates: { type: String, required: true },
  comments: { type: String },
  userName: { type: String, required: true},
  phoneNumber: { type: String, required: true}
  // should users be a separate collection?
});

//time reported, location, coordinates, comments.  User info Name, phone #

const Turtle = mongoose.model("Turtle", turtleSchema);

module.exports = Turtle;