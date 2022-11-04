/*
    Made by : Armando Arredondo Valle, Antonio Noguerón Bárcenas and Camila Turner Escalante
    Start date: 21/10/2022
*/
//password: process.env.PASSWORD,

const express = require('express');
const mysql = require('mysql2');
const router = express.Router();


const register = require('./routes/register');



const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/', register);

app.listen(port, () => console.log(`Servidor iniciado en http://localhost:${port}`));

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    res.send('received');
    const pool = mysql.createPool({
        host: 'pruebas-clases-armando.cunjphg47bez.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: process.env.PASSWORD,
        database: 'Planty',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    pool.getConnection((err, connection) => {
        if (err) {
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                console.error('Database connection was closed.');
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
                console.error('Database has too many connections.');
            }
            if (err.code === 'ECONNREFUSED') {
                console.error('Database connection was refused.');
            }
        }
        if (connection) connection.release();
    });
    pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    }
    );

});