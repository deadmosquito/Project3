const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/new-post" 
router.route("/")
  .get(postController.all3)

  module.exports = router;