const mysqldb = require('../db/db.mysql');

class Posts {
    constructor(contenu, imageUrl, userId){
        this.contenu = contenu;
        this.imageUrl = imageUrl;
        this.userId = userId;
    }

    async save() {

        let sql = `
        INSERT INTO posts(
        contenu,
        imageUrl,
        userId
        )
        VALUES(
            '${this.contenu}',
            '${this.imageUrl}',
            '${this.userId}'
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