const router = require("express").Router();
const blogRoutes = require("./blogs");
const newPost = require("./new-post")
const registration = require("./registration")

router.use("/blogs", blogRoutes);
router.use("/new-post", newPost)
router.use("/registration", registration)

module.exports = router;
