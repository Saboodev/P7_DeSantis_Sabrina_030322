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
router.put("/:id", auth, postCtrl.modifyPost);

// Images
router.get("/image/:id", auth, postCtrl.getImage);

// Like / Unlike
// router.patch("/:id/likeunlike", auth, postCtrl.likeUnlikePost);
// router.post("/:id/postLikedByUser", auth, postCtrl.postLikedByUser);
// router.post("/:id/likeunlike", auth, postCtrl.countLikes);

module.exports = router;