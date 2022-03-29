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
        // let mm = d.getMonth() + 1;
        // let dd = d.getDate();

        // let createdAtDate = '${yyyy}-${mm}-${dd}';

        let sql = `
        INSERT INTO users(
        nom,
        prenom,
        pseudo,
        email,
        bio,
        isadmin,
        timestamp,
        password   
        )
        VALUES(
            '${this.nom}',
            '${this.prenom}',
            '${this.pseudo}',
            '${this.email}',
            '${this.bio}',
            '${this.isadmin}',
            '${this.timestamp}',
            '${this.password}'
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

    static modifyUser(userId) {
        let sql = `UPDATE users SET prenom = "${prenom}", nom = "${nom}", pseudo = "${pseudo}", bio = "${bio}" WHERE userId = ${userId}`; 

        return mysqldb.execute(sql);
    }

    static destroyUser(userId) {
        let sql = `DELETE FROM users WHERE userId = ${userId}`;
        
        return mysqldb.execute(sql);
    }
    
}


module.exports = User;