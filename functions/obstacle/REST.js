const { pool } = require("../../script/config");


const getObstacle = (request, response) => {
  pool.query("SELECT * FROM geneworld.obstacles", (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    }
    response.status(200).json(results.rows);
  });
};

const addObstacle = (request, response) => {
  const { traversable, effect, nom, type, positionX, positionY, width, height } = request.body;
  pool.query("INSERT INTO geneworld.obstacles(traversable, effect, nom, type, positionX, positionY, width, height) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);", [traversable, effect, nom, type, positionX, positionY, width, height], error => {
    if (error) {
      console.log(error);
      response.status(404)
    }
    response.status(201).json({ status: "success", message: "Obstacle added." });
  });
};
module.exports = { getObstacle, addObstacle}