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
  create: function(req, res) {
    db.Post
      .create({
        title: req.body.title,
        description: req.bodydescription,
        body: req.body.body,
        image:req.body.image,
        AuthorId: req.body.AuthorId,
        CategoryId: req.body.CategoryId
      })
      .then((dbModel) => {  
        res.json(dbModel) 
      })
      .catch(err => res.status(422).json(err));
  }
};
