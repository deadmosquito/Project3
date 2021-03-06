const db = require("../models");


module.exports = {
    findOne: function(req, res) {
      if(req.session.isAuthorLoggin ===false){
        let data = {
          isSuccess: "No"
        }
        return res.json(data)
      }
      db.Author
        .findOne({where: {id: req.session.authorId}})
        .then((dbModel) =>{
          res.json(dbModel)} )
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) { 
      db.Author
      .update(
        {
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          githubURL: req.body.githubURL,
          profileURL: req.body.profileURL
        },
        {returning: true, where: {id: req.body.id} }
      )
        .then((dbModel) => {  
          res.json(dbModel) 
        })
        .catch(err => res.status(422).json(err));

    },
    findAll: function(req, res) {
      db.Post
      .findAll({where: {AuthorId: req.session.authorId}})
 
      .then((dbModel => {
        res.json(dbModel)
      }))
      .catch(err => res.status(422).json(err));
    }
  
}