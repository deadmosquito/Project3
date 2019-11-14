const router = require("express").Router();
const blogRoutes = require("./blogs");
const newPost = require("./new-post")
const registration = require("./registration")
const news = require("./news")

router.use("/blogs", blogRoutes);
router.use("/new-post", newPost)
router.use("/registration", registration)
router.use("/news", news)

module.exports = router;
