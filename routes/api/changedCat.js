const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/new-post" 
router.route("/")
  .post(postController.changedCat)

  module.exports = router;