const router = require("express").Router();
const newPost = require("./new-post")
const registration = require("./registration")
const login = require("./login")
const home = require("./home")
const news = require("./news")
const logout = require("./logout")
const all = require("./all")
const blog = require("./blog")
const profile = require("./profile");
const newsfive = require("./newsfive")

router.use("/new-post", newPost)
router.use("/blogs", blog)
router.use("/registration", registration)
router.use("/login", login)
router.use("/all", all)
router.use('/home',home)
router.use("/news", news)
router.use("/logout", logout)
router.use("/newsfive", newsfive)
router.use("/profile", profile)

module.exports = router;
