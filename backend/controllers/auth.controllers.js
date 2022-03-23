// Importation de bcrypt pour hasher le mdp
const bcrypt = require('bcrypt');

// Importation de crypto-js pour le chiffrement du mail
const cryptoJs = require("crypto-js");

// Importation de jsonwebtoken
const jwt = require('jsonwebtoken');

// Importation dotenv pour utilisation des variables d'environnement
const dotenv = require('dotenv').config();

// Importation du models User.js
const User = require("../models/user.models");

// Importation mysqlconnection
const mysqlconnection = require("../db/db.mysql");

// signUp pour enregistrer le nouvel utilisateur dans la bdd
exports.signUp = (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  // Instance de la class User
  const user = new User(email, password);
  console.log('user : ' + user);

  // chiffrer l'email avant l'envoi dans la bdd
  const emailCrypted = user.emailChiffrement();
  console.log("emailCrypted : " + emailCrypted);

  // //hasher le mdp avant l'envoi dans la bdd
  // salt = 10 le nombre de fois où l'algorithme de hashage sera exécuté
  bcrypt.hash(password, 10)
    .then(hash => {
      console.log("-->emailCrypted et hash");
      console.log(emailCrypted);
      console.log(hash);

      //les données que j'envoie
      const user = new User(emailCrypted, hash);
      console.log(user);

    //la reqûete SQL pour envoyer les données dans la table users
    mysqlconnection.query('INSERT INTO users SET ?', user, function (error, results) {
      if (error) {
        console.log(error);
        res.json({ error });
      }else{
        console.log(results);
        res.json({ message: "Utilisateur enregistré" });
      }
    });
  })
  .catch(error => res.status(500).json({ error }));
};

// Login d'un user déjà enregistré
exports.login = (req, res, next) => {

  const emailCryptoJs = cryptoJs.HmacSHA256(req.body.email, `${process.env.CRYPTOJS_EMAIL}`).toString();
  console.log(emailCryptoJs);

  const email = emailCryptoJs;

  //chercher dans la bdd si l'utilisateur est présent
  mysqlconnection.query(
    'SELECT * FROM users WHERE email = ?', email, function (error, results) {
    if (error) {
      console.log(error);
      res.json({ error });
    } else{
      console.log("-->results");
      console.log(results);

      //si l'email de l'utilisateur n'existe pas dans la bdd
      if(results == 0){
        return res.status(404).json({ error: "utilisateur inexistant dans la base de données"});
      }

      //contrôler la validité du password envoyé par le front
      bcrypt
        .compare(req.body.password, results[0].password)
        .then(valid => {
            console.log("-->valid");
            console.log(valid);

            //si le mdp n'est pas correct
            if(!valid){
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            //si le mdp est correct
            //envoi du userId et du token d'authentification dans la response du serveur 
            
            console.log("-->Password");
            console.log(results[0].password);
            //génération du token JWT
            const token = jwt.sign(
                {userId: results[0].id},
                `${process.env.TOKEN_USER}`,
                { expiresIn: '24h' }
            )
            console.log(token);

            // réponse du serveur avec userId et token
            res.status(201).json({
                userId: results[0].id,
                token,
            })
        })
            .catch(error => res.status(500).json({ error }));
    }
  });
};