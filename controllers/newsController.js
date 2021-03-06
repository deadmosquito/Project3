axois = require("axios")
const apiKey = process.env.REACT_APP_NEWS_APIKEY

module.exports = {
    findAll: function(req,res) {
        let cat =req.body.category;
        if(!(cat)){
          cat = ""
        }
      axois.get("https://newsapi.org/v2/top-headlines?country=us"+apiKey+"&category="+cat)
      .then(function(result){
        res.json(result.data.articles)
      })
      .catch(err =>console.log(`errorrrrrrrrrrrrrr${err}`))

    },
    findFive: function(req,res) {
    axois.get("https://newsapi.org/v2/top-headlines?country=us"+apiKey+"&pagesize=3")
    .then(function(result){
      res.json(result.data.articles)
    })
    .catch(err =>console.log(`errorrrrrrrrrrrrrr${err}`))

  }

} 