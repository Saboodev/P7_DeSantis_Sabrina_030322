const router = require('express').Router();

// importation des controllers 
const userCtrl = require('../controllers/user.controllers');
const authCtrl = require('../controllers/auth.controllers');

const multer = require("../middleware/multer-config")
const auth = require("../middleware/auth");

// middleware password pour un mdp fort
const password = require("../middleware/password");


//gestion de connexion
router.post('/register', password, authCtrl.signUp);
router.post('/login', authCtrl.login);

//gestion de l'user
router.get('/', auth, userCtrl.getAllUsers);
// router.get('/:id', userCtrl.getUser);
// router.put('/:id', multer, userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;