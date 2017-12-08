const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firebaseId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  volunteerOrAdmin: {
    type: String,
    required: true
  },
  turtles: [
    {
      type: Schema.ObjectId,
      ref: "Gig"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;