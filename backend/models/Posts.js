const mysqldb = require('../db/db.mysql');

class Posts {
    constructor(contenu, imageUrl, userId, author){
        this.contenu = contenu;
        this.imageUrl = imageUrl;
        this.userId = userId;
        this.author = author;
    }

    async save() {

        let sql = `
        INSERT INTO posts(
        contenu,
        imageUrl,
        userId, 
        author
        )
        VALUES(
            "'${this.contenu}'",
            '${this.imageUrl}',
            '${this.userId}',
            '${this.author}'
        );
        ` ;
        return mysqldb.execute(sql);

    }

    static findAll() {
        let sql = "SELECT * FROM posts";

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

    static likeDislike(postId) {
        let sql = `SELECT * FROM likes WHERE likes.userId = ${userId} AND likes.postId = ${postId}`;

        return mysqldb.execute(sql);
    }

}

module.exports = Posts;