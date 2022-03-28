const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config")
const commentCtrl = require("../controllers/comment.controllers");
const auth = require("../middleware/auth");

// selon CRUD
router.get("/:id/allcomments", commentCtrl.getAllComments);
router.get("/:id", commentCtrl.getCommentById);
router.post("/:id", commentCtrl.createComment);
router.put('/:id', multer, commentCtrl.modifyComment);
router.delete("/:id", commentCtrl.deleteComment);

module.exports = router;