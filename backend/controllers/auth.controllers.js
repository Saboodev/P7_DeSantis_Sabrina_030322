// Importation de bcrypt pour hasher le mdp
const bcrypt = require('bcrypt');

// Importation de jsonwebtoken
const jwt = require('jsonwebtoken');

// Importation dotenv pour utilisation des variables d'environnement
const dotenv = require('dotenv').config();

// Importation mysqlconnection
const mysqldb = require("../db/db.mysql");

const Users = require("../models/Users");

// signUp pour enregistrer le nouvel utilisateur dans la bdd
exports.signUp = (req, res) => {
  let { password, nom, prenom, pseudo, bio, isadmin, timestamp } = req.body;

  // //hasher le mdp avant l'envoi dans la bdd
  // salt = 10 le nombre de fois où l'algorithme de hashage sera exécuté
  bcrypt.hash(password, 10)
    .then(hash => {
      let email = req.body.email;
      let password = hash;
        
    //la reqûete SQL pour envoyer les données dans la table users
    let users = new Users( email, password, nom, prenom, pseudo, bio, isadmin, timestamp );
    console.log(users);
    users.save()
    .then(() => 
    res.status(201).json({ message: "Utilisateur créé !" }))
    .catch(error => res.status(400).json( error ))
   
  })
  .catch(error => res.status(500).json({ error }));
};

// Login d'un user déjà enregistré
exports.login = (req, res, next) => {

  const email = req.body.email;
  const password = req.body.password;
 
  // rechercher dans bdd si l'utilisateur existe
  Users.findByEmail(email)
  .then(users => {
    if (!users) {
      console.log(users);
      return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
    console.log(password);
    console.log(users[0][0].password);

    // contrôle de la validité du password
    let valid = bcrypt.compareSync(password, users[0][0].password)
    console.log(valid); 
    if(valid == true) {
        console.log(users[0][0]);
        // envoi du userID et du token d'authentification dans la response du serveur 
        res.status(200).json({
          userId: users[0][0].userId,
          isadmin : users[0][0].isadmin,
          token: jwt.sign(
            { userId: users[0][0].userId, isadmin: users[0][0].isadmin },
            process.env.TOKEN_USER,
            { expiresIn: '24h' }
          )
        });
      }
  })
  .catch(error => res.status(500).json({ error }));
};