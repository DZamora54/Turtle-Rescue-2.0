const db = require("../models");

//methods for the turtlesController
module.exports = {
  findAll: function(req, res) {
    db.Turtle
      .find(req.query)
      .sort({ date: -1 })
      .then(dbTurtle => res.json(dbTurtle))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Turtle
      .findById(req.params.id)
      .then(dbTurtle => res.json(dbTurtle))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Turtle
      .create(req.body)
      .then(dbTurtle => res.json(dbTurtle))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Turtle
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbTurtle => res.json(dbTurtle))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Turtle
      .findById({ _id: req.params.id })
      .then(dbTurtle => dbTurtle.remove())
      .then(dbTurtle => res.json(dbTurtle))
      .catch(err => res.status(422).json(err));
  }
};
