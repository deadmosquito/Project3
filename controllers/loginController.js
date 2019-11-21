const bcrypt = require('bcrypt');
const db = require('../models');
const passport = require('passport')
const auth = require('../utils/auth');

module.exports = {
  verify: (username, password,done) => {
    db.Author.findOne({where:{ email: username.body.email }})
      .then(author => {
        if (!author) {
        return  password.json(username.session)
        }
        return bcrypt.compare(username.body.password, author.hash)
          .then(match => {
           
            if (match) {
              username.session.authorId = author.dataValues.id
              username.session.isAuthorLoggin = true;
              return password.json(username.session)
            }
           return password.json(username.session)
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
            .then(newAuthor =>{
              done(null, newAuthor)
            } )
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
    if (req.session.isAuthorLoggin) {
      let data = {
        isSuccess: 'Yes',
        authorId: req.session.authorId
      }
      res.json(data)
    } else {
      let data = {
        isSuccess: "No"
      }
      res.json(data)
    }
  }
};
