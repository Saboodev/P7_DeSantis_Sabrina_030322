const mysqlconnection = require("../db/db.mysql");
const fs = require('fs');

// Importation du models User.js
const User = require("../models/user.models");

// Récupérer tous les users
exports.getAllUsers = (req, res) => {
  mysqlconnection.query(
    'SELECT * FROM users', (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};

// Récupérer un user
exports.getUser = (req, res) => {
  const userId = req.params.userId;
  
  mysqlconnection.query(
    'SELECT * FROM users WHERE users.userId = ${userId}', (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};

// Mise à jour user
exports.updateUser = (req, res) => {
  if (req.file) {
    mysqlconnection.query(
      'SELECT * FROM users WHERE users.userI= ${userId}', (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      if (users.userId !== req.auth.userId || req.isadmin === true) {
        res.status(400).json({
            error: new Error('Requête non valide')
        });
        return false
    }
      // On supprime l'ancienne image
      const filename = users.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, (error) => {
          if (error) throw error;
      })
    });

    const userId = req.params.userId;

    let {destination, filename} = req.file
    destination = destination + filename

    mysqlconnection.query(
      'INSERT INTO images (post_id, userId, image_url) VALUES (NULL, ${userId}, "${destination}")', 
      (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
    });
  }

  const { prenom, nom, pseudo, bio } = req.body;
  const userId = req.params.userId;
  mysqlconnection.query(
    'UPDATE users SET prenom = "${prenom}", nom = "${nom}", pseudo = "${pseudo}", bio = "${bio}" WHERE users.userId = ${userId}', 
    (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    if (result) {
      res.status(200).json(result);
    }
  });
};

// Supprimer un user
exports.deleteUser = (req, res) => {
  if (req.file) {
    mysqlconnection.query(
      'SELECT * FROM users WHERE users.userI= ${userId}', (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      if (users.userId !== req.auth.userId || req.isadmin === true) {
        res.status(400).json({
            error: new Error('Requête non valide')
        });
        return false
    }
      const filename = users.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        mysqlconnection.query('DELETE FROM users WHERE users.userI= ${userId}', users, function (error, results) {
          if (error) {
            console.log(error);
            res.json({ error });
          }else{
            console.log(results);
            res.json({ message: "Utilisateur supprimé" });
          }
        })
        });
      })
      .catch(error => res.status(500).json({ error }));
    }
};
