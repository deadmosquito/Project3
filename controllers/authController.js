const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = {
  register: (req, res) => {
    console.log("--------------FIRST----------------------")
    bcrypt.genSalt()
      .then(salt => {
        console.log("--------------SECOND----------------------")
        console.log(salt)
        bcrypt.hash(req.body.password, salt)
          .then(hash => {
            console.log("--------------THIRD----------------------")
            db.Author
              .create({
                fname: req.body.fname,
                lname: req.body.lname, 
                email: req.body.email, 
                hash })
              .then(newAuthor => {
                console.log(newAuthor)
                res.redirect('/login');
              })
              .catch((err) =>{
                  console.log(err)
                res.status(500).send(err.message)

              } )
          })
          .catch(err => res.status(500).send(err.message));
      })
      .catch(err => res.status(500).send(err.message));
  },
  logout: (req, res) => {
    req.logout();
    res.sendStatus(200);
  }
};
