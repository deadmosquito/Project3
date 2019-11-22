const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = {
  register: function (req, res) {
    db.Author.findOne({ where: { email: req.body.email } })
      .then(resultOne => {
        if (resultOne === null) {
          bcrypt.genSalt()
            .then(salt => {

              bcrypt.hash(req.body.password, salt, function (err, hash) {
                db.Author
                  .create({
                    fname: req.body.fname,
                    lname: req.body.lname,
                    email: req.body.email,
                    hash,
                    profileURL: req.body.profileURL
                  })
                  .then(newAuthor => {
                    res.redirect('/login');
                  })
                  .catch((err) => {
                    res.status(500).send(err.message)

                  })

              })
            })
        }
        else {

          res.json({ existed: true })
        }
      }).catch(err => console.log(err))

  },
  logout: (req, res) => {
    req.session.destroy()
    res.status(200)
  },
  checker: (req, res) => {
    res.json(req.session)
  }
};
