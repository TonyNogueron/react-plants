/*
const config = {
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'Planty',
    port: 3306,
    debug: false
};
*/

const config = {
    connectionLimit: 100,
    host: 'testingclass1004b.ccdundegl4lm.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: process.env.PASSWORD,
    database: 'Planty',
    port: 3306,
    debug: false
};

module.exports = config;