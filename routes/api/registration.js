const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/new-post" 
router.route("/")
  .post(authController.register)

module.exports = router;
