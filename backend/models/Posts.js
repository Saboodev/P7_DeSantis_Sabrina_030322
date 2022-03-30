const mysqldb = require('../db/db.mysql');

class Posts {
    constructor(contenu, imageUrl, created){
        this.contenu = contenu;
        this.imageUrl = imageUrl;
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
        imageUrl,
        created
        )
        VALUES(
            '${this.contenu}',
            '${this.imageUrl}',
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
        let sql = `SELECT * FROM posts WHERE postId = "${postId}";`;

        return mysqldb.execute(sql);
    }

    static updatePost(postId, contenu, imageUrl) {
        let sql = `UPDATE posts SET contenu = "${contenu}", imageUrl = "${imageUrl}" WHERE postId = ${postId};`; 

        return mysqldb.execute(sql);
    }

    static destroyPost(postId) {
        let sql = `DELETE FROM posts WHERE postId = ${postId};`;

        return mysqldb.execute(sql);
    }

}


module.exports = Posts;