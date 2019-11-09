const db = require("../models");


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Category
      .findAll({})
      .then((dbModel) =>{
        console.log(dbModel)
        res.json(dbModel)} )
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
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
        console.log(dbModel)
        res.json(dbModel) 
        console.log(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};
