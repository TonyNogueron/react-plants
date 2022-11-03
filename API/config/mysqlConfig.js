const config = {
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'Planty',
    port: 3306,
    debug: false
};

module.exports = config;