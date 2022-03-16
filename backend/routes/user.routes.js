const express = require('express');
const router = express.Router();
const multer = require("../middleware/multer-config")
const auth = require("../middleware/auth");

// importation du controllers user
const userCtrl = require('../controllers/user.controllers');

// selon CRUD
router.get("/:id", auth, userCtrl.getOneUser);
router.get("/image/:id", auth, userCtrl.getProfilPicture);
router.put("/:id", auth, multer.single("profil_image"), userCtrl.updateOneUser);

module.exports = router;