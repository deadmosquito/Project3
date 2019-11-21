const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = {
  register: function(req, res) {
    bcrypt.genSalt()
      .then(salt => {

        bcrypt.hash(req.body.password, salt, function (err, hash) {
          db.Author
            .create({
              fname: req.body.fname,
              lname: req.body.lname,
              email: req.body.email,
              hash
            })
            .then(newAuthor => {
              res.redirect('/login');
            })
            .catch((err) => {
              res.status(500).send(err.message)

            })

        })
      })
  },
  logout: (req, res) => {
    req.session.destroy()
    res.status(200)
  },
  checker: (req,res)=>
  {
    res.json(req.session)
  }
};
