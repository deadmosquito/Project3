const bcrypt = require('bcrypt');
const db = require('../models');
const passport = require('passport')
const auth = require('../utils/auth');

module.exports = {
  verify: (username, password, done) => {
    //console.log(username.body.email)
    //console.log(username.body.password)

    // console.log(password)
    db.Author.findOne({ email: username })
      .then(author => {
        if (!author) {

          return done(null, false, { message: 'Incorrect username or password.' });
        }
        return bcrypt.compare(username.body.password, author.hash)
          .then(match => {
            if (match) {

              console.log(author.dataValues.id)
              username.session.authorId = author.dataValues.id
              username.session.isAuthorLoggin = true;
              console.log('=============-')
              console.log(username)
              return done(null, author);
            }
            return done(null, false, { message: 'Incorrect username or password.' });
          })
          .catch(err => done(err));
      })
      .catch(err => done(err));
  },
  serializeUser: (author, done) => done(null, author._id),
  deserializeUser: (id, done) => {
    db.Author.findById(id)
      .then(author => {
        done(null, author);
      })
      .catch(err => done(err));
  },
  github: (accessToken, refreshToken, profile, done) => {
    db.Author.findOne({ githubId: profile.id })
      .then(author => {
        if (!author) {
          db.Author.create({ githubId: profile.id, username: profile.username })
            .then(newAuthor => done(null, newAuthor))
            .catch(err => done(err));
        }
        done(null, author);
      })
      .catch(err => done(err));
  },
  isLoggedIn: (req, res, next) => {
    if (req.author) {
      next();
    } else {
      res.redirect('/login');
    }
  },
  isLoggedInPage: (req, res, next) => {
    console.log('--------------')
    console.log(req.session.authorId)
    console.log('==============')
    if (req.session.isAuthorLoggin) {
      // next()
      let data = {
        isSuccess: 'Yes',
        authorId: req.session.authorId
      }
      console.log(data)
      res.json(data)
    } else {
      console.log('no')
      let data = {
        isSuccess: "No"
      }
      console.log(data)
      res.json(data)
    }
  }
};
