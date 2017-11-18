const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const turtleSchema = new Schema({
  dateTimeReported: { type: Date, default: Date.now },
  city: { type: String, required: true },
  state: { type: String, required: true, maxlength: 2, minlength: 2 },
  coordinates: { type: String, required: true },
  comments: { type: String },
  userName: { type: String, required: true},
  phoneNumber: { type: String, required: true}
  //add phoneNumber validation
  // should users be a separate collection?
});

//time reported, location, coordinates, comments.  User info Name, phone #

const Turtle = mongoose.model("Turtle", turtleSchema);

module.exports = Turtle;