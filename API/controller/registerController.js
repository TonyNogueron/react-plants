const res = require("express/lib/response");
const mysql = require("mysql2");
const mysqlConfig = require("../config/mysqlConfig");

const connection = mysql.createConnection(mysqlConfig);

const registerUser = (req, res) => {
  const body = req.body;
  const sql = "INSERT INTO User (username, email, psswd) VALUES (?, ?, ?)";
  connection.query(
    sql,
    [
        body.username,
        body.email,
        body.psswd
    ],
    (err, result, fields) => {
      if (err) {
        res.status(500).send(err);
        return false;
      } else {
        res.status(200).send("User registered successfully");
        return true;
      }
    }
  );
};

module.exports = { registerUser };