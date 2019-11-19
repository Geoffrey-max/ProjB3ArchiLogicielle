const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { pool } = require("./script/config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getUser = (request, response) => {
  pool.query("SELECT * FROM geneworld.users", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addUser = (request, response) => {
  const { firstName, lastName, pwd, confirmePwd } = request.body;
  if (pwd === confirmePwd) {
    pool.query("INSERT INTO geneworld.users(firstName, lastName, password) VALUES ($1, $2, crypt($3, gen_salt('bf')));", [firstName, lastName, pwd], error => {
      if (error) {
        throw error;
      }
      response.status(201).json({ status: "success", message: "User added." });
    });
  } else {
    response.status(500).json({ status: "unsuccess", message: "User not added." });
  }
};

const getObstacle = (request, response) => {
  pool.query("SELECT * FROM geneworld.obstacles", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addObstacle = (request, response) => {
  const { traversable, effect, nom, type, positionX, positionY, width, height } = request.body;
  pool.query("INSERT INTO geneworld.obstacles(traversable, effect, nom, type, positionX, positionY, width, height) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);", [traversable, effect, nom, type, positionX, positionY, width, height], error => {
    if (error) {
      throw error;
    }
    response.status(201).json({ status: "success", message: "Obstacle added." });
  });
};

const getVague = (request, response) => {
  pool.query("SELECT * FROM geneworld.vagues", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addVague = (request, response) => {
  const { nbr, zone_aggro, vitesse, temps_btw_apparission, autre } = request.body;
  pool.query("INSERT INTO geneworld.vagues(nbr, zone_aggro, vitesse, temps_btw_apparission, autre) VALUES ($1, $2, $3, $4, $5);", [nbr, zone_aggro, vitesse, temps_btw_apparission, autre], error => {
    if (error) {
      throw error;
    }
    response.status(201).json({ status: "success", message: "Vague added." });
  });
};

const getHistorique = (request, response) => {
  pool.query("SELECT * FROM geneworld.historiques", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addHistorique = (request, response) => {
  const { score, datepassage, id_joueurs } = request.body;
  pool.query("INSERT INTO geneworld.vagues(score, datepassage, id_joueurs) VALUES ($1, $2, $3);", [score, datepassage, id_joueurs], error => {
    if (error) {
      throw error;
    }
    response.status(201).json({ status: "success", message: "Historique added." });
  });
};

app
  .route("/users")
  // GET endpoint
  .get(getUser)
  // POST endpoint
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
  .route("/historiques")
  .get(getHistorique)
  .post(addHistorique);


// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`, process.env.PORT || 3002);
});
