const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const passport = require('passport')
router
  .route("/")
 // .get(loginController.github)
  .get(passport.authenticate('github'));

  module.exports = router;