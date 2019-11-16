const router = require("express").Router();
const authController = require("../../controllers/authController");
const passport = require('passport');

// Matches with "/api/new-post" 
router.route("/")
  .get(authController.logout)
  //.post(passport.authenticate('local', { successRedirect: '/new-post', failureRedirect: '/login' }));
module.exports = router;
