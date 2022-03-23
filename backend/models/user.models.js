// Importation de crypto-js pour le chiffrement du mail
const cryptoJs = require("crypto-js");

// Importation de bcrypt pour hasher le mdp
const bcrypt = require('bcrypt');

// Importation dotenv pour utilisation des variables d'environnement
const dotenv = require('dotenv').config();


class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    // méthode pour chiffrer et déchiffrer l'email
    emailChiffrement(){
        const emailCryptoJs = cryptoJs.HmacSHA256(this.email, `${process.env.CRYPTOJS_EMAIL}`).toString();
        return emailCryptoJs;
    }
    
}

module.exports = User;