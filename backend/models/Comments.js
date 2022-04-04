const mysqldb = require('../db/db.mysql');

class Comments {
    constructor(content, postId){
        this.content = content;
        this.postId = postId;
    }

    async save() {
       
        let sql = `
        INSERT INTO comments(
        content,
        postId
        )
        VALUES(
            '${this.content}',
            '${this.postId}'
        );
        ` ;
        return mysqldb.execute(sql);

    }

    static findAll(postId) {
        let sql = `SELECT * FROM comments WHERE comments.postId = ${postId};`;

        return mysqldb.execute(sql);
    }

    static findById(commentId) {
        let sql = `SELECT * FROM comments WHERE commentId = ${commentId};`;

        return mysqldb.execute(sql);
    }

    static updateComment(commentId, content) {
        let sql = `UPDATE comments SET content = "${content}" WHERE commentId = ${commentId};`; 

        return mysqldb.execute(sql);
    }

    static destroyComment(commentId) {
        let sql = `DELETE FROM comments WHERE commentId = ${commentId};`;

        return mysqldb.execute(sql);
    }

}

module.exports = Comments;