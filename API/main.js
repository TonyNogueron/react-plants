/*
    Made by : Armando Arredondo Valle, Antonio Noguerón Bárcenas and Camila Turner Escalante
    Start date: 21/10/2022
*/

const express = require('express');
const app = express();
const port = 3000;
const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host: '', // Link de amazon
    user: 'admin',
    password: process.env.PASSWORD,
    database: 'PlantyDatabase', // Nombre de la base de datos creada en mysql

});

