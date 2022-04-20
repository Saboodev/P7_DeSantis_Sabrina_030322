const mysqldb = require("../db/db.mysql");
const fs = require('fs');
const Users = require("../models/Users");
const Posts = require("../models/Posts");

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
  if (req.auth.isadmin != 0) {
    try {
      const users = await Users.findAll();
      const usersData = users[0];
      res.status(200).json({ usersData });
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(400).json({ message: "Vous ne pouvez pas exécuter cette requête"});
  }
};

// Récupérer un user
exports.getUser = async (req, res, next) => {
  if (req.auth.isadmin != 0 || req.auth.userId == req.params.id) {
    try {
      let getUserId = req.params.id;
      const users = await Users.findById(getUserId);
      const userData = users[0][0];
      res.status(200).json({ userData });
    } catch (error) {
      res.status(400).json({ error: "Requête non autorisée" });
    }
  } else {
    return res.status(400).json({ message: "Vous ne pouvez pas exécuter cette requête"});
  };
};

// Mise à jour user
exports.updateUser = async (req, res) => {
  let getUserId = req.params.id;
  let { nom, prenom, pseudo, bio } = req.body;
  const user = await Users.findById(getUserId);
    if (user[0].length == 0) {
      return res.status(400).json({ error: "utilisateur inexistant"});
      }
    if (user[0][0].userId !== req.auth.userId) {
      return res.status(400).json({ error: "Requête non valide" });
    }
    Users.modifyUser(req.auth.userId, prenom, nom, pseudo, bio);
    return res.status(200).json({  message: "Profil mis à jour" });
};

// Supprimer un user
exports.deleteUser = async (req, res) => {
  let getUserId = req.params.id;
  if (!req.auth.userId) {
    return res.status(400).json({ message: "Vous ne pouvez pas exécuter cette requête"});
  }
  const users = await Users.findById(getUserId);
  if (users[0].length == 0) {
    return res.status(400).json({ message: "utilisateur inexistant"});
  }
  if (users[0][0].userId == req.auth.userId || req.auth.isadmin != 0) {
    Users.destroyUser(getUserId);
    return res.status(200).json({  message: "Utilisateur supprimé" });
  } else {
    return res.status(401).json({ message: 'Requête non autorisée'})
  }   
}
      // const filename = users.imageUrl.split('/images/')[1];
      // fs.unlink(`images/${filename}`, () => {
      //   mysqldb.query(`DELETE FROM users WHERE userId = ${userId}`, users, function (error, results) {
      //     if (error) {
      //       console.log(error);
      //       res.json({ error });
      //     }else{
      //       console.log(results);
      //       res.json({ message: "Utilisateur supprimé" });
      //     }
      //   })
      //   });
      // })
      // .catch(error => res.status(500).json({ error }));


