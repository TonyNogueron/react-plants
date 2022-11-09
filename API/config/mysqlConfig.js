const mysql = require("mysql2");

/*
const pool = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
});

const pool = mysql.createPool({
  host: 'testingclass1004b.ccdundegl4lm.us-east-1.rds.amazonaws.com',
  user: "admin",
  password: "",
  database: "Planty",
  port: 3306,
});


const config = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
};
*/
const config = {
  host: "testingclass1004b.ccdundegl4lm.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "",
  database: "Planty",
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  } else {
    console.log("Connection established");
  }
});

module.exports =  connection;
