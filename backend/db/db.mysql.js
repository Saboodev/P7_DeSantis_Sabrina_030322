//importer le package pour utiliser les variables d'environnement
const dotenv = require('dotenv').config();

//importer mysql
const mysql = require('mysql2');

//les paramètres de connexion 
const pool = mysql.createPool({
    host: 'localhost',
    database: 'groupomania',
    user: 'root',
    password: ''
});

// //la connexion à la bdd
// mysqlconnection.connect((err)=>{
//     if(err){
//         console.log(`error connecting: ${err}`);
//     } else{
//         console.log("connecté à la base de données - groupomania");
//         console.log(`connected as id ${mysqlconnection.threadId}`);
//     }
// })


module.exports = pool.promise(); 