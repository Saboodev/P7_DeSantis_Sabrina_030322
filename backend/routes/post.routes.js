const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post.controllers");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config")

// selon CRUD
router.get("/", auth, postCtrl.getAllPosts);
router.get("/:id", auth, postCtrl.getPostById);
router.post("/", auth, multer, postCtrl.createNewPost);
router.delete("/:id", auth, postCtrl.deletePost);
router.put("/:id", auth, multer, postCtrl.modifyPost);

// Gestion des likes
router.post("/:id/like", auth, postCtrl.likesAndDislikes);
router.post("/:id/liketotal", auth, postCtrl.countLikes);

module.exports = router;