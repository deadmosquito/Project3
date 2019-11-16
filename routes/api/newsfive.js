const router = require("express").Router();
const newsController = require("../../controllers/newsController");

// Matches with "/api/new-post" 
router.route("/")
  .get(newsController.findFive) 

module.exports = router;
