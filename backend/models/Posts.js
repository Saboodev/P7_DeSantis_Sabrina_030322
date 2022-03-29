const mysqldb = require('../db/db.mysql');

class Posts {
    constructor(contenu, image_url, created){
        this.contenu = contenu;
        this.image_url = image_url;
        this.created = created;
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = '${yyyy}-${mm}-${dd}';

        let sql = `
        INSERT INTO posts(
        contenu,
        image_url,
        created
        )
        VALUES(
            '${this.contenu}',
            '${this.image_url}',
            '${createdAtDate}'
        );
        ` ;
        return mysqldb.execute(sql);

    }

    static findAll() {
        let sql = "SELECT * FROM posts;"

        return mysqldb.execute(sql);
    }

    static findById(postId) {
        let sql = `SELECT * FROM posts WHERE postId = ${postId};`;

        return mysqldb.execute(sql);
    }

    static updatePost() {
        let sql = `UPDATE posts SET contenu = "${contenu}", image_url = "${image_url}" WHERE userId = ${userId};`; 

        return mysqldb.execute(sql);
    }

    static destroyPost() {
        let sql = `DELETE FROM posts WHERE userId = ${userId};`;

        return mysqldb.execute(sql);
    }

}


module.exports = Posts;