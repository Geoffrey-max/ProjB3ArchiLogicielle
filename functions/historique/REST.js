const { pool } = require("../../script/config");

const getHistorique = (request, response) => {
    pool.query("SELECT * FROM geneworld.historique", (error, results) => {
        if (error) {
            console.log(error);
            response.status(404)
        }else{
            response.status(200).json(results.rows);
        }
        
    });
};
const getHistoriqueDESC = (request, response) => {
    pool.query("SELECT * FROM geneworld.historique ORDER BY score DESC", (error, results) => {
        if (error) {
            console.log(error);
            response.status(404)
        }else{
            response.status(200).json(results.rows);
        }
       
    });
};

const getHistoriqueBYID = (request, response) => {
    const { id } = request.params;
    pool.query("SELECT * FROM geneworld.historique WHERE id = $1",[id], (error, results) => {
        if (error) {
            console.log(error);
            response.status(404)
        }else{
            if (results.rows[0]) {
                response.status(200).json(results.rows[0]);
            }else{
                response.status(404).json({ status: "unsuccess", message: "Historique NOt Found." });
            }
            
        }
        
    });
};

const addHistorique = (request, response) => {
    const { score, datepassage, id_joueurs } = request.body;
    pool.query("INSERT INTO geneworld.historique(score, datepassage, id_joueurs) VALUES ($1, $2, $3);", [score, datepassage, id_joueurs], error => {
        if (error) {
            console.log(error);
            response.status(404)
        }else{
            response.status(201).json({ status: "success", message: "Historique added." });
        }
        
    });
};

const deleteHistorique = (request, response) => {
    const { id } = request.params;
    pool.query("DELETE FROM geneworld.historique WHERE id = $1",[id], (error, results) => {
        if (error) {
            console.log(error);
            response.status(404)
        }else{
            response.status(200).json({ status: "success", message: "Historique delete." });
        }
        
    });
};





module.exports = { getHistorique, addHistorique, getHistoriqueBYID,deleteHistorique, getHistoriqueDESC}