const router = require("express").Router();
const likeController = require("../../controllers/likeController");

router.route("/")
  .post(likeController.like)

  module.exports = router;