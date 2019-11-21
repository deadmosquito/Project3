const db = require("../models");


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    if(req.session.isAuthorLoggin ===false){
      let data = {
        isSuccess: "No"
      }
      return res.json(data)
    }
    db.Category
      .findAll({})
      .then((dbModel) =>{
        
        let data ={
          dataCategory : dbModel,
          authorId: req.session.authorId,
          isAuthorLoggin: req.session.isAuthorLoggin
        }
    
        res.json(data)} )
      .catch(err => res.status(422).json(err));
  },
  all3: function(req, res){
    db.Post.findAll({include: [db.Author,db.Category],limit:3})
    .then((dbAll) =>{
      res.json(dbAll)
    })
    .catch(err =>res.status(422).json(err))
  },
  create: function(req, res) {
    db.Post
      .create({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body,
        image:req.body.image,
        AuthorId: req.body.AuthorId,
        CategoryId: req.body.CategoryId
      })
      .then((dbModel) => {  
        res.json(dbModel) 
      })
      .catch(err => res.status(422).json(err));
  },
  all: function(req, res){
    db.Post.findAll({include: [db.Author,db.Category],where:{CategoryId:2}})
    .then((dbAll) =>{
      res.json(dbAll)
    })
    .catch(err =>res.status(422).json(err))
  },
  detail: function(req,res){
    db.Post.findOne({where:{id :req.params.id},include: [db.Author,db.Category]})
    .then((result) =>{
      res.json(result)
    })
    .catch(err =>console.log(err))
  }
};
