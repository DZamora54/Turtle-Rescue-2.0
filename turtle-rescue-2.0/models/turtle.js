const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const turtleSchema = new Schema({
  dateTimeReported: { type: Date, default: Date.now },
  //city: { type: String, required: true },
  email: { type: String, required: true, match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]},
  coordinates: { type: String, required: true },
  subject: { type: String, body: string },
  name: { type: String, required: true},
  //phoneNumber: { type: String, required: true}
});


const Turtle = mongoose.model("Turtle", turtleSchema);

module.exports = Turtle;