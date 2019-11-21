axois = require("axios")
const apiKey = process.env.REACT_APP_NEWS_APIKEY

module.exports = {
    findAll: function(req,res) {
        console.log(req.body)
        let cat =req.body.category;
        if(!(cat)){
          cat = ""
          console.log('here')
        }
      axois.get("https://newsapi.org/v2/top-headlines?country=us"+apiKey+"&category="+cat)
      .then(function(result){
        //console.log(result)

        res.json(result.data.articles)
       // console.log("pleaseeeeeeeeeeeeeeeeeeeeeeee------------------------------")
      })
      .catch(err =>console.log(`errorrrrrrrrrrrrrr${err}`))

    },
    findFive: function(req,res) {
      console.log(apiKey)
    axois.get("https://newsapi.org/v2/top-headlines?country=us"+apiKey+"&pagesize=3")
    .then(function(result){
      //console.log(result)

      res.json(result.data.articles)
     // console.log("pleaseeeeeeeeeeeeeeeeeeeeeeee------------------------------")
    })
    .catch(err =>console.log(`errorrrrrrrrrrrrrr${err}`))

  }

} 