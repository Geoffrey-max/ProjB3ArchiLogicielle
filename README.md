# ProjB3ArchiLogicielle

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
