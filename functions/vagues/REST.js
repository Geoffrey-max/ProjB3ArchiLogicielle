const { pool } = require("../../script/config");



const getVague = (request, response) => {
  pool.query("SELECT * FROM geneworld.vagues", (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    }
    response.status(200).json(results.rows);
  });
};

const addVague = (request, response) => {
  const { nbr, zone_aggro, vitesse, temps_btw_apparission, autre } = request.body;
  pool.query("INSERT INTO geneworld.vagues(nbr, zone_aggro, vitesse, temps_btw_apparission, autre) VALUES ($1, $2, $3, $4, $5);", [nbr, zone_aggro, vitesse, temps_btw_apparission, autre], error => {
    if (error) {
      console.log(error);
      response.status(404)
    }
    response.status(201).json({ status: "success", message: "Vague added." });
  });
};


module.exports = { getVague, addVague}