const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');

// Pour l'utilisation des variables d'environnement
const dotenv = require('dotenv').config();


//importation connexion à la bdd mysql
const mysql = require("./db/db.mysql");

// Importation des routes
const userRoutes = require("./routes/user.routes");
// const commentRoutes = require('./routes/comment.routes');
// const postRoutes = require('./routes/post.routes');

// Créer une application express
const app = express();
app.use(morgan("dev")); //loggue les requêtes et les réponses

app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
// Permet de transformer les données de la requête POST en un objet JSON
app.use(express.json());

// Empêche les requêtes malveillantes d'accéder à des données sensibles
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// // appel des models dans la DB
// const db = require("./models");
// db.sequelize.sync();

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/user', userRoutes);
// app.use('/api/comment', commentRoutes);
// app.use('/api/post', postRoutes);

module.exports = app;