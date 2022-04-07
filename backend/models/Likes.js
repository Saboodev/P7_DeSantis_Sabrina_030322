const mysqldb = require('../db/db.mysql');

class Likes {
    constructor(postId, userId){
        this.postId = postId;
        this.userId = userId;
    }

    async save() {

        let sql = `
        INSERT INTO posts(
        postId,
        userId
        )
        VALUES(
            '${this.postId}',
            '${this.userId}'
        );
        ` ;
        return mysqldb.execute(sql);

    }

    static totalLike(postId) {
        let sql = `SELECT COUNT(*) AS total FROM likes WHERE likes.postId = ${postId};`;

        return mysqldb.execute(sql);
    }

    static dislike(postId) {
        let sql = `DELETE FROM likes WHERE likes.postId = ${postId}`;

        return mysqldb.execute(sql);
    }

    static likeDislike(postId) {
        let sql = `SELECT * FROM likes WHERE postId = ${postId}`;

        return mysqldb.execute(sql);
    }

}


module.exports = Likes;