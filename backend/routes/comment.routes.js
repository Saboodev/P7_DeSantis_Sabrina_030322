const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config")
const commentCtrl = require("../controllers/comment.controllers");
const auth = require("../middleware/auth");

// selon CRUD
router.get("/:id/allcomments", auth, commentCtrl.getAllComments);
router.get("/:id", auth, commentCtrl.getOneComment);
router.post("/:id", auth, commentCtrl.createComment);
router.put('/:id', auth, multer, commentCtrl.modifyComment);
router.delete("/:id", auth, commentCtrl.deleteOneComment);

module.exports = router;