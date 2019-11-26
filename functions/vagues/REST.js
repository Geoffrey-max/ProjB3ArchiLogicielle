const { pool } = require("../../script/config");



const getVague = (request, response) => {
  pool.query("SELECT * FROM geneworld.vagues", (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    } else {
      response.status(200).json(results.rows);
    }

  });
};

const getVagueBYID = (request, response) => {
  const { id } = request.params;
  pool.query("SELECT * FROM geneworld.vagues WHERE id = $1", [id], (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    } else {
      if (results.rows[0]) {
        response.status(200).json(results.rows[0]);
      }else{
        response.status(404).json({ status: "unsuccess", message: "Vague not Found." });
      } 
    }
  });
};

const addVague = (request, response) => {
  const { nbr, zone_aggro, vitesse, temps_btw_apparission, autre } = request.body;
  pool.query("INSERT INTO geneworld.vagues(nbr, zone_aggro, vitesse, temps_btw_apparission, autre) VALUES ($1, $2, $3, $4, $5);", [nbr, zone_aggro, vitesse, temps_btw_apparission, autre], error => {
    if (error) {
      console.log(error);
      response.status(404)
    } else {
      response.status(200).json({ status: "success", message: "Vague added." });
    }

  });
};

const deleteVague = (request, response) => {
  const { id } = request.params;
  pool.query("DELETE FROM geneworld.vagues WHERE id = $1", [id], (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    } else {
      response.status(200).json({ status: "success", message: "Vague delete." });
    }

  });
};

const upadteVague = (request, response) => {
  const { id } = request.params;
  const { nbr, zone_aggro, vitesse, temps_btw_apparission, autre } = request.body;
  pool.query("SELECT * FROM geneworld.vagues WHERE id = $1", [id], (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    } else {
      if (results.rows[0]) {
        pool.query("UPDATE geneworld.vagues SET nbr= $2, zone_aggro= $3, vitesse= $4, temps_btw_apparission= $5, autre= $6 WHERE id=$1", [id, nbr, zone_aggro, vitesse, temps_btw_apparission, autre], error => {
          if (error) {
            console.log(error);
            response.status(404)
          } else {
            response.status(200).json({ status: "success", message: "Vague update." });
          }
        });
      }else{
        response.status(404).json({ status: "unsuccess", message: "Vague not Found." });
      } 
    }
  });
  

  
};

module.exports = { getVague, addVague, getVagueBYID, deleteVague, upadteVague }