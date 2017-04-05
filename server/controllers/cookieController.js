const User = require('../models').User;
const cookieController = {


  setCookie: (req, res, next) => {
    res.cookie('loggedIn', Math.floor(Math.random() * 100));
    return res.status(201).redirect('/MGMT');
  },

  isLoggedIn: (req, res, next) => {
    if (req.cookies.loggedIn){
      return res.status(200).redirect('../build/index.html');
    } else {
       res.status(400).send(new Error('error'));
    }
 }
}

module.exports = cookieController;
