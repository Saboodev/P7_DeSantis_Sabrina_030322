//importer le package pour utiliser les variables d'environnement
const dotenv = require('dotenv').config();

//importer mysql
const mysql = require('mysql2');

//les paramètres de connexion 
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});


module.exports = pool.promise(); 