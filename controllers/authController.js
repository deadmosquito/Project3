const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = {
  register: function(req, res) {
    console.log(req.body)
    console.log("--------------FIRST----------------------")
    bcrypt.genSalt()
      .then(salt => {
        console.log("--------------SECOND----------------------")
        console.log(salt)
        bcrypt.hash(req.body.password, salt, function (err, hash) {

          console.log("--------------THIRD----------------------")
          console.log(hash)
          db.Author
            .create({
              fname: req.body.fname,
              lname: req.body.lname,
              email: req.body.email,
              hash
            })
            .then(newAuthor => {
              console.log(newAuthor)
              res.redirect('/login');
            })
            .catch((err) => {
              console.log(err)
              res.status(500).send(err.message)

            })

        })
      })
  },
  logout: (req, res) => {
    req.logout();
    res.sendStatus(200);
  },
  hi: (req,res)=>
  {
    console.log('aaaaaaaaaaa')
  }
};
