const { pool } = require("../../script/config");

const getUser = (request, response) => {
  pool.query("SELECT * FROM geneworld.users", (error, results) => {
    if (error) {
      console.log(error); response.status(404)
    }
    response.status(200).json(results.rows);
  });
};
const getUserBYID = (request, response) => {
  const { id } = request.params;
  pool.query("SELECT * FROM geneworld.users WHERE id = $1", [id], (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    }
    if (results.rows[0]) {
      response.status(200).json(results.rows[0]);
    } else {
      response.status(404).json({ status: "unsuccess", message: "User Not Found" })
    }
  });
};

const addUser = (request, response) => {
  var nameNotUse = true
  const { firstName, lastName, pwd, confirmePwd } = request.body;
  if (pwd === confirmePwd) {
    pool.query("SELECT * FROM geneworld.users", (error, results) => {
      if (error) {
        console.log(error); response.status(404)
      }
      results.rows.forEach((row) => {
        if (row.lastname === lastName || row.firstname === firstName) {
          nameNotUse = false;
          // console.log("boucle" + nameNotUse);
        }
      })
      if (nameNotUse) {
        pool.query("INSERT INTO geneworld.users(firstName, lastName, password) VALUES ($1, $2, crypt($3, gen_salt('bf')));", [firstName, lastName, pwd], error => {
          if (error) {
            console.log(error); response.status(404)
          } else {
            response.status(201).json({ status: "success", message: "User added." });
          }
        });
      } else {
        response.status(500).json({ status: "unsuccess", message: "User not added. Name Alredy use." });
      }
    });

  } else {
    response.status(500).json({ status: "unsuccess", message: "User not added." });
  }
};
const deleteUser = (request, response) => {
  const { id } = request.params;
  pool.query("DELETE FROM geneworld.users WHERE id = $1", [id], (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    } else {
      response.status(200).json({ status: "success", message: "User delete." });
    }

  });
};

const upadteUser = (request, response) => {
  var nameNotUse = true
  const { id } = request.params;
  const { firstName, lastName, pwd } = request.body;
  pool.query("SELECT * FROM geneworld.users WHERE id = $1", [id], (error, results) => {
    if (error) {
      console.log(error);
      response.status(404)
    }
    if (results.rows[0]) {
      pool.query("SELECT * FROM geneworld.users", (error, results) => {
        if (error) {
          console.log(error); response.status(404)
        }
        results.rows.forEach((row) => {
          if (row.lastname === lastName || row.firstname === firstName) {
            nameNotUse = false;
            // console.log("boucle" + nameNotUse);
          }
        })
        if (nameNotUse) {
          pool.query("UPDATE geneworld.users SET firstName= $2, lastName= $3, password= $4 WHERE id=$1", [id, firstName, lastName, pwd], error => {
            if (error) {
              console.log(error);
              response.status(404)
            } else {
              response.status(201).json({ status: "success", message: "User update." });
            }
          });
        } else {
          response.status(500).json({ status: "unsuccess", message: "User not Update. Name Alredy use." });
        }
      });
    } else {
      response.status(404).json({ status: "unsuccess", message: "User Not Found" })
    }
  });

};
module.exports = { getUser, addUser, getUserBYID, deleteUser, upadteUser }