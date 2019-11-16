const router = require("express").Router();
const profileController = require("../../controllers/profileController")

// Matches with "/api/new-post" 
router.route("/")
  .get(profileController.findOne)
  .put(profileController.update) 

module.exports = router;
