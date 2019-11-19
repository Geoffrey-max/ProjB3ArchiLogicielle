const { pool } = require("../../script/config");

const getHistorique = (request, response) => {
    pool.query("SELECT * FROM geneworld.historique", (error, results) => {
        if (error) {
            console.log(error);
            response.status(404)
        }
        response.status(200).json(results.rows);
    });
};

const addHistorique = (request, response) => {
    const { score, datepassage, id_joueurs } = request.body;
    pool.query("INSERT INTO geneworld.historique(score, datepassage, id_joueurs) VALUES ($1, $2, $3);", [score, datepassage, id_joueurs], error => {
        if (error) {
            console.log(error);
            response.status(404)
        }
        response.status(201).json({ status: "success", message: "Historique added." });
    });
};



module.exports = { getHistorique, addHistorique}