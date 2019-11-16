const router = require("express").Router();
const newPost = require("./new-post");
const registration = require("./registration");
const login = require("./login");
const home = require("./home");
const news = require("./news");
const logout = require("./logout");
const profile = require("./profile");


router.use("/new-post", newPost)
router.use("/registration", registration)
router.use("/login", login)
router.use('/home',home)
router.use("/news", news)
router.use("/logout", logout)
router.use("/profile", profile)

module.exports = router;
