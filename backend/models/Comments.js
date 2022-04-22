const mysqldb = require('../db/db.mysql');

class Comments {
    constructor(content, postId, userName){
        this.content = content;
        this.postId = postId;
        this.userName = userName
    }

    async save() {
       
        let sql = `
        INSERT INTO comments(
        content,
        postId,
        userName
        )
        VALUES(
            "'${this.content}'",
            '${this.postId}',
            '${this.userName}'
        );
        ` ;
        return mysqldb.execute(sql);

    }

    static findComments(id) {
        let sql = `SELECT * FROM comments WHERE postId = ${id};`;

        return mysqldb.execute(sql);
    }

    static findAll() {
        let sql = `SELECT * FROM comments`;

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