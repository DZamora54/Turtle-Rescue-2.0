const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/turtle-hero-db",
  {
    useMongoClient: true
  }
);

//checking to see if db works
console.log(db.practiceTest)

const turtleSeed = [
  {
      dateTimeRecorded: new Date(Date.now()),
      city: "Lynn",
      state: "MA",
      coordinates: "42.466763, -70.949494",
      comments: "found near Long Beach",
      userName: "Charles",
      phoneNumber: "555-555-5555"
  }
];

db.Turtle
  .remove({})
  .then(() => db.Turtle.collection.insertMany(turtleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });