const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/new-post" 
router.route("/")
  .get(authController.hi)




/* router.get('/', (req, res) => {    
    console.log('eeeeeeeeeee')
    res.json({
        isLoggedIn: req.session.isLoggedIn || false
    })    
  }); */

  module.exports = router;