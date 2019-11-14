const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const passport = require('passport');

// Matches with "/api/new-post" 
router.route("/")
  .post(loginController.verify)
  .get(loginController.isLoggedInPage)
  //.post(passport.authenticate('local', { successRedirect: '/new-post', failureRedirect: '/login' }));
module.exports = router;
