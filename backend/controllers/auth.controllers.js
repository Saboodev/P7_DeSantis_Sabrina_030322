// Importation de bcrypt pour hasher le mdp
const bcrypt = require('bcrypt');

// Importation de crypto-js pour le chiffrement du mail
const cryptoJs = require("crypto-js");

// Importation de jsonwebtoken
const jwt = require('jsonwebtoken');

// Importation dotenv pour utilisation des variables d'environnement
const dotenv = require('dotenv').config();

// Importation mysqlconnection
const mysqldb = require("../db/db.mysql");

const Users = require("../models/Users")

// signUp pour enregistrer le nouvel utilisateur dans la bdd
exports.signUp = (req, res) => {
  let { email, password, nom, prenom, pseudo, bio, isadmin, timestamp } = req.body;

  // chiffrer l'email avant l'envoi dans la bdd
  const emailCryptoJs = cryptoJs.HmacSHA256(email, `${process.env.CRYPTOJS_EMAIL}`).toString();

  // //hasher le mdp avant l'envoi dans la bdd
  // salt = 10 le nombre de fois où l'algorithme de hashage sera exécuté
  bcrypt.hash(password, 10)
    .then(hash => {
      let email = emailCryptoJs;
      let password = hash;
        
    //la reqûete SQL pour envoyer les données dans la table users
    let users = new Users( email, password, nom, prenom, pseudo, bio, isadmin, timestamp );
    
    users.save()
  
    .then(() => 
    res.status(201).json({ message: "Utilisateur créé !" }))
    .catch(error => res.status(400).json({ error: "Email déjà utilisé" }))
   
  })
  .catch(error => res.status(500).json({ error }));
};

// Login d'un user déjà enregistré
exports.login = (req, res) => {
  const { email, password } = req.body;

  const emailCryptoJs = cryptoJs.HmacSHA256(email, `${process.env.CRYPTOJS_EMAIL}`).toString();

 //chercher dans la bdd si l'utilisateur est présent
 Users.findByEmail({where: { emailCryptoJs: req.body.email }})
    .then(users => {
        if(!users) {
            return res.status(404).json({ error: "Utilisateur non trouvé !" })
        }

    //contrôler la validité du password envoyé par le front
    bcrypt
      .compare(password, results[0].password)
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
  })
}
