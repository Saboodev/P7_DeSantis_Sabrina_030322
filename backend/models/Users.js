const mysqldb = require('../db/db.mysql');

class User {
    constructor(email, password, nom, prenom, pseudo, bio, isadmin, timestamp){
        this.email = email;
        this.password = password;
        this.nom = nom;
        this.prenom = prenom;
        this.pseudo = pseudo;
        this.bio = bio;
        this.isadmin = isadmin;
        this.timestamp = timestamp;
    }

    async save() {

        let sql = `
        INSERT INTO users(
        email,
        password,   
        nom,
        prenom,
        pseudo,
        bio,
        isadmin
        )
        VALUES(
            '${this.email}',
            '${this.password}',
            '${this.nom}',
            '${this.prenom}',
            '${this.pseudo}',
            '${this.bio}',
            '${this.isadmin}'
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

    static findByEmail(email) {
        let sql = `SELECT * FROM users WHERE email = '${email}';`;

        return mysqldb.execute(sql);
    }

    static modifyUser(userId, prenom, nom, pseudo, bio) {
        let sql = `UPDATE users SET prenom = "${prenom}", nom = "${nom}", pseudo = "${pseudo}", bio = "${bio}" WHERE userId = ${userId}`; 

        return mysqldb.execute(sql);
    }

    static destroyUser(userId) {
        let sql = `DELETE FROM users WHERE userId = ${userId}`;
        
        return mysqldb.execute(sql);
    }
    
}


module.exports = User;