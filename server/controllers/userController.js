const User = require('../models').User;

const userController = {};
  // Verifies user.
userController.verifyUser = (req, res) => {
  return User
    .find({
      where: {
        username: req.body.username,
       // password: req.body.password,
      }
    })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'There is no user with that name.', //redirect to signup?
        });
      }
      
      return user
        .find({
          where: {
            username: req.body.username,
            password: req.body.password,
          }
        })
        .then (password => {
          if (!password) {
            return res.status(404).send({
              message: 'Your password is incorrect.'
            });
          }
        })
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

userController.createUser = (req,res) => {
    return User
      .create({
        username: req.body.username,
        password: req.body.password
      })
      .then(user => {
        cookieController.setCookie (req, res => {
        res.status(201).send(user);
      })
      .catch(error => res.status(400).send(error));
      })
}

   
module.exports = userController;


