const mysqldb = require('../db/db.mysql');

class Comments {
    constructor(content){
        this.content = content;
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = '${yyyy}-${mm}-${dd}';

        let sql = `
        INSERT INTO posts(
        content
        )
        VALUES(
            '${this.content}',
            '${createdAtDate}'
        );
        ` ;
        return mysqldb.execute(sql);

    }

    static findAll() {
        let sql = "SELECT * FROM comments;"

        return mysqldb.execute(sql);
    }

    static findById(commentId) {
        let sql = `SELECT * FROM comments WHERE commentId = ${commentId};`;

        return mysqldb.execute(sql);
    }

    static updateComment() {
        let sql = `UPDATE comments SET content = "${content}" WHERE userId = ${userId};`; 

        return mysqldb.execute(sql);
    }

    static destroyComment() {
        let sql = `DELETE FROM comments WHERE userId = ${userId};`;

        return mysqldb.execute(sql);
    }

}

module.exports = Comments;