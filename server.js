require('dotenv').config();
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var db = require("./models");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));
  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./client/public/index.html'));
  });
}


// Serve up static assets (usually on heroku)
/* if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} */
// Add routes, both API and view
app.use(routes);



app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
