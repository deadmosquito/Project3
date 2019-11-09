const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = {
  verify: (username, password, done) => {
    db.Author.findOne({ username: username })
      .then(author => {
        if (!author) {
          return done(null, false, { message: 'Incorrect username or password.' });
        }

        return bcrypt.compare(password, author.hash)
          .then(match => {
            if (match) {
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
  }
};
