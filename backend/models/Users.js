const mysqldb = require('../db/db.mysql');

class User {
    constructor(email, password, pseudo, nom, prenom, bio, isadmin, timestamp){
        this.email = email;
        this.password = password;
        this.pseudo = pseudo;
        this.nom = nom;
        this.prenom = prenom;
        this.bio = bio;
        this.isadmin = isadmin;
        this.timestamp = timestamp;
    }

    async save() {
        // let d = new Date();
        // let yyyy = d.getFullYear();
        // let mm = d.getMonth();
        // let dd = d.getDate();

        // let createdAtDate = '${dd}-${mm}-${yyyy}'

        let sql = `
        INSERT INTO users(
        email,
        password, 
        pseudo,
        nom,
        prenom,
        bio,
        isadmin,
        timestamp
        )
        VALUES(
            '${this.email}',
            '${this.password}',
            '${this.pseudo}',
            '${this.nom}',
            '${this.prenom}',
            '${this.bio}',
            '${this.isadmin}',
            '${this.timestamp}'
        );
        ` ;
        return mysqldb.execute(sql);

    }

    static findAll() {
        let sql = "SELECT * FROM users;"

        return mysqldb.execute(sql);
    }

    static findById(userId) {
        let sql = `SELECT * FROM users WHERE userId = ${userId};`;

        return mysqldb.execute(sql);
    }

}


module.exports = User;