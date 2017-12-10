const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const turtleSchema = new Schema({
  dateTimeReported: { type: Date, default: Date.now },
  //city: { type: String, required: true },
  email: { type: String, required: true, match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]},
  coordinates: { type: String, required: true },
  subject: { type: String, validate: [
    // Function takes in the new `longstring` value to be saved as an argument
    function(input) {
      // If this returns true, proceed. If not, return the error message below
      return input.length >= 15;
    },
    // Error Message
    "Subject description should be longer."
  ]
},
  name: { type: String, required: true},
  //phoneNumber: { type: String, required: true}
});


const Turtle = mongoose.model("Turtle", turtleSchema);

module.exports = Turtle;