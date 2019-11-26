const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getHistorique, addHistorique, getHistoriqueBYID, deleteHistorique, getHistoriqueDESC } = require("./functions/historique/REST")
const { getObstacle, addObstacle, getObstacleBYID, deleteObstacle, upadteObstacle } = require("./functions/obstacle/REST")
const { getUser, addUser, getUserBYID, deleteUser, upadteUser } = require("./functions/users/REST")
const { getVague, addVague, getVagueBYID, deleteVague, upadteVague } = require("./functions/vagues/REST")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app
  .route("/users")
  .get(getUser)
  .post(addUser);
app
  .route("/users/:id")
  .get(getUserBYID)
  .delete(deleteUser)
  .put(upadteUser)

app
  .route("/obstacles")
  .get(getObstacle)
  .post(addObstacle);
app
  .route("/obstacles/:id")
  .get(getObstacleBYID)
  .delete(deleteObstacle)
  .put(upadteObstacle)

app
  .route("/vagues")
  .get(getVague)
  .post(addVague);
app
  .route("/vagues/:id")
  .get(getVagueBYID)
  .delete(deleteVague)
  .put(upadteVague)

app
  .route("/historique")
  .get(getHistorique)
  .post(addHistorique);
app
  .route("/historique/:id")
  .get(getHistoriqueBYID)
  .delete(deleteHistorique)

app
  .route("/historiqueDESC")
  .get(getHistoriqueDESC);


// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`, process.env.PORT || 3002);
});
