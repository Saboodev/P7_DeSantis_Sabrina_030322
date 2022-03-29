const mysqldb = require("../db/db.mysql");
const fs = require('fs');
const { Users, Posts } = require("../models/Users")

// Créer un user
exports.createNewUser = async (req, res, next) => {
  try {
    let { email, password, nom, prenom, pseudo, bio, isadmin, timestamp } = req.body;
    let users = new Users( email, password, nom, prenom, pseudo, bio, isadmin, timestamp );
  
    users = await users.save();
    console.log(users);

    res.status(201).json({ message: "Nouveau membre crée"});
  } catch (error) {
    next (error);
  }
};

// Récupérer tous les users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.findAll();

    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

// Récupérer un user
exports.getUser = async (req, res, next) => {
  try {
    let getUserId = req.params.id;

    const users = await Users.findById(getUserId);

    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

// Mise à jour user
exports.updateUser = (req, res) => {
  if (req.file) {
    mysqldb.query(
      'SELECT * FROM users WHERE email = ? ', (err, result) => {
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

    mysqldb.query(
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
  mysqldb.query(
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
    mysqldb.query(
      'SELECT * FROM users WHERE userId = ${userId}', (err, result) => {
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
        mysqldb.query('DELETE FROM users WHERE userId = ${userId}', users, function (error, results) {
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
