const router = require("express").Router();
const postController = require("../../controllers/postController");

router
  .route("/:id")
  .get(postController.detail)

  module.exports = router;