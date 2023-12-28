const db = require("../models");
const User = db.User;

exports.createUser = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a User
  const user = {
    name: req.body.name,
    email: req.body.email,
  };
  // Save User in the database
  User.create(user)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      })
    );
};

exports.getUser = (req, res) => {
  User.findAll()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      })
    );
};
