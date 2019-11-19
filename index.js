const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getHistorique, addHistorique} = require("./functions/historique/REST")
const { getObstacle, addObstacle} = require("./functions/obstacle/REST")
const { getUser, addUser} = require("./functions/users/REST")
const { getVague, addVague} = require("./functions/vagues/REST")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app
  .route("/users")
  .get(getUser)
  .post(addUser);

  app
  .route("/obstacles")
  .get(getObstacle)
  .post(addObstacle);

  app
  .route("/vagues")
  .get(getVague)
  .post(addVague);

app
  .route("/historique")
  .get(getHistorique)
  .post(addHistorique);
// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`, process.env.PORT || 3002);
});
