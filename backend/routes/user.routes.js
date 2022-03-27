const router = require('express').Router();

// importation des controllers 
const userCtrl = require('../controllers/user.controllers');
const authCtrl = require('../controllers/auth.controllers');

// const { use } = require('../app');
const multer = require("../middleware/multer-config")
const auth = require("../middleware/auth");

// middleware password pour un mdp fort
const password = require("../middleware/password");


//gestion de connexion
router.post('/register', password, authCtrl.signUp);
router.post('/login', authCtrl.login);
// router.get('/logout', authCtrl.logout);

//gestion de l'user
router.post('/', multer, userCtrl.createNewUser);
router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.getUser);
router.put('/:id', auth, multer, userCtrl.updateUser);
router.delete('/:id', auth, userCtrl.deleteUser);

module.exports = router;