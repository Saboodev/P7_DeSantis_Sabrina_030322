const fs = require('fs');
const Posts = require("../models/Posts");
const Users = require("../models/Users");

// Créer un post
exports.createNewPost = async (req, res, next) => {
    try {
        let { contenu, imageUrl } = req.body;
        let posts = new Posts( contenu, imageUrl );
      
        posts = await posts.save();
    
        res.status(201).json({ message: "Nouveau post crée"});
      } catch (error) {
        next (error);
      }
};

// Récupérer tous les posts
exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Posts.findAll();
    
        res.status(200).json({ posts });
      } catch (error) {
        next(error);
      }
};

// Récupérer un user
exports.getPostById = async (req, res, next) => {
  console.log(req.params);
    try {
        let getPostId = req.params.id;
        console.log(req.params.id);
    
        const posts = await Posts.findById(getPostId);
    
        res.status(200).json({ posts });
      } catch (error) {
        next(error);
      }
};

//Supprimer un post
exports.deletePost = async (req, res, next) => {
  try {
    let getPostId = req.params.id;
    console.log(req.params.id);

    const posts = await Posts.findById(getPostId);
      
    res.status(200).json({ posts });
    } catch (error) {
    next(error);
    }
    if (users[0][0].userId !== req.auth.userId || req.isadmin === false) {
      res.status(400).json({
          error: new Error('Requête non valide')
      });
      return false
    }

    const filename = posts.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      Posts.destroyPost()
      .then(() => 
      res.status(201).json({ message: "Post supprimé !" }))
      .catch(error => res.status(400).json({ error: "Mais dites donc, il n'est pas de vous ce post !" }))  
      })
    .catch(error => res.status(500).json({ error }));
}

// exports.modifyPost = async (req, res, next) => {
//     res.send("Modify post route");
// } 

  
    