const User = require('../models').User;
const cookieController = {};

cookieController.setCookie = setCookie;

  setCookie (req, res, next => {
    res.cookie('cookie', Math.floor(Math.random() * 100));
    next();
  })

  isLoggedIn (req,res,next => {
    if(req.cookies.loggedIn){
      res.send(true);
    } else {
       res.send(false);
    }
 })


module.exports = cookieController;
