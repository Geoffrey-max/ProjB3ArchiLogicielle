const { pool } = require("../../script/config");

const getUser = (request, response) => {
    pool.query("SELECT * FROM geneworld.users", (error, results) => {
      if (error) {
        console.log(error); response.status(404)
      }
      response.status(200).json(results.rows);
    });
  };
  
  const addUser = (request, response) => {
    const { firstName, lastName, pwd, confirmePwd } = request.body;
    if (pwd === confirmePwd) {
      pool.query("INSERT INTO geneworld.users(firstName, lastName, password) VALUES ($1, $2, crypt($3, gen_salt('bf')));", [firstName, lastName, pwd], error => {
        if (error) {
          console.log(error); response.status(404)
        }
        response.status(201).json({ status: "success", message: "User added." });
      });
    } else {
      response.status(500).json({ status: "unsuccess", message: "User not added." });
    }
  };
module.exports = { getUser, addUser}