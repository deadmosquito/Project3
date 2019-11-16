const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/new-post" 
router.route("/")
  .get(authController.checker)

  module.exports = router;