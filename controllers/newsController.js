axois = require("axios")
const apiKey = process.env.REACT_APP_NEWS_APIKEY

module.exports = {
    findAll: function(req,res) {
        console.log(apiKey)
      axois.get("https://newsapi.org/v2/top-headlines?country=us"+apiKey)
      .then(function(result){
        //console.log(result)

        res.json(result.data.articles)
       // console.log("pleaseeeeeeeeeeeeeeeeeeeeeeee------------------------------")
      })
      .catch(err =>console.log(`errorrrrrrrrrrrrrr${err}`))

    }

} 