const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post.controllers");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config")

// selon CRUD
router.get("/", postCtrl.getAllPosts);
router.get("/:id", postCtrl.getPostById);
router.post("/", multer, postCtrl.createNewPost);
router.delete("/:id", postCtrl.deletePost);
router.put("/:id", multer, postCtrl.modifyPost);

// Images
// router.get("/image/:id", auth, postCtrl.getImage);

// Like / Unlike
router.post("/:id/like", postCtrl.likesAndDislikes);
// router.post("/:id/postLikedByUser", auth, postCtrl.postLikedByUser);
// router.post("/:id/likeunlike", auth, postCtrl.countLikes);

module.exports = router;