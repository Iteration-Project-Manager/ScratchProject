const User = require('../models').User;

const userController = {};
  // Verifies user.
userController.verifyUser = (req, res, next) => {
  return User
    .find({
      where: {
        username: req.body.username,
      }
    })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'There is no user with that name.', 
        });
      } else {
          if (result.password === req.body.password) {
            return next();
          } else {
            return res.status(404).send ({message: 'Your password in incorrect.'})
          }
      }
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
        return next();
      })
      .catch(error => res.status(400).send(error));

}

   
module.exports = userController;


