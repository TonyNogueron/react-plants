/*
    Made by : Armando Arredondo Valle, Antonio Noguerón Bárcenas and Camila Turner Escalante
    Start date: 21/10/2022
*/
//password: process.env.PASSWORD,

const express = require('express');
const mysql = require('mysql2');
const router = express.Router();


const user = require('./routes/user');



const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/', user);

app.listen(port, () => console.log(`Servidor iniciado en http://localhost:${port}`));

