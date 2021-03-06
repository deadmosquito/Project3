const router = require("express").Router();
const postController = require("../../controllers/postController");
const loginController = require("../../controllers/loginController");

// Matches with "/api/new-post" 
router.route("/")
  .get(postController.findAll)
  .post(postController.create)

module.exports = router;
