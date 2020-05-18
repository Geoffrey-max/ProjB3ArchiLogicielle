const { pool } = require("../../script/config");


const getObstacle = (request, response) => {
  pool.query("SELECT * FROM geneworld.obstacles", (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    } else {
      response.status(200).json(results.rows);
    }

  });
};

const getObstacleBYID = (request, response) => {
  const { id } = request.params;
  pool.query("SELECT * FROM geneworld.obstacles WHERE id = $1", [id], (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    } else {
      if (results.rows[0]) {
        response.status(200).json(results.rows[0]);
      }else{
        response.status(404).json({ status: "unsuccess", message: "Obstacle Not Found." });
      }
    }
  });
};
const getObstacleBYNAME = (request, response) => {
  const { map } = request.params;
  pool.query("SELECT * FROM geneworld.obstacles WHERE mapname = $1", [map], (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    } else {
      if (results.rows) {
        response.status(200).json(results.rows);
      }else{
        response.status(404).json({ status: "unsuccess", message: "Obstacle Not Found." });
      }
    }
  });
};

const addObstacle = (request, response) => {
  var nameNotUse = true;
  const { traversable, effect, nom, type, positionx, positiony, width, height } = request.body;
  pool.query("SELECT * FROM geneworld.obstacles", (error, results) => {
    if (error) {
      console.log(error); response.status(404)
    }
    results.rows.forEach((row) => {
      if (row.nom === nom) {
        nameNotUse = false;
      }
    })
    if (nameNotUse) {
      pool.query("INSERT INTO geneworld.obstacles(mapname,traversable, effect, nom, type, positionx, positiony, width, height) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9);", [mapname, traversable, effect, nom, type, positionx, positiony, width, height], error => {
        if (error) {
          console.log(error);
          response.status(404)
        } else {
          response.status(201).json({ status: "success", message: "Obstacle added." });
        }
      });
    } else {
      response.status(500).json({ status: "unsuccess", message: "Obstacle not added. Name Alredy use." });
    }
  });

};

const deleteObstacle = (request, response) => {
  const { id } = request.params;
  pool.query("DELETE FROM geneworld.obstacles WHERE id = $1", [id], (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    } else {
      response.status(200).json({ status: "success", message: "Obstacle delete." })
    }

  });
};

const upadteObstacle = (request, response) => {
  var nameNotUse = true;
  const { id } = request.params;
  const { traversable, effect, nom, type, positionx, positiony, width, height } = request.body;
  pool.query("SELECT * FROM geneworld.obstacles WHERE id = $1", [id], (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    } else {
      if (results.rows[0]) {
        pool.query("SELECT * FROM geneworld.obstacles", (error, results) => {
          if (error) {
            console.log(error); response.status(404)
          }
          results.rows.forEach((row) => {
            if (row.nom === nom) {
              nameNotUse = false;
            }
          })
          if (nameNotUse) {
            pool.query("UPDATE geneworld.obstacles SET traversable= $2, effect= $3, nom= $4, type= $5, positionx= $6, positiony= $7, width= $8, height= $9 WHERE id=$1", [id, traversable, effect, nom, type, positionx, positiony, width, height], error => {
              if (error) {
                console.log(error);
                response.status(404)
              } else {
                response.status(201).json({ status: "success", message: "Obstacle update." });
              }
            });
          } else {
            response.status(500).json({ status: "unsuccess", message: "Obstacle not added. Name Alredy use." });
          }
        });
      
      }else{
        response.status(404).json({ status: "unsuccess", message: "Obstacle Not Found." });
      }
    }
  });
 



};

module.exports = { getObstacle, getObstacleBYID, addObstacle, deleteObstacle, upadteObstacle, getObstacleBYNAME }
