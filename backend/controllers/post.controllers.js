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

// Récupérer un post
exports.getPostById = async (req, res, next) => {
  console.log(req.params.id);
    try {
        let postId = req.params.id;
    
        const posts = await Posts.findById(postId);
    
        res.status(200).json({ posts });
      } catch (error) {
        next(error);
      }
};

//Supprimer un post
exports.deletePost = async (req, res, next) => {
  
  let postId = req.params.id;
  
  const posts = await Posts.findById(postId);

  if (posts[0].length == 0) {
    return res.status(400).json({ message: "post inexistant"});
  }
  Posts.destroyPost(postId);
  return res.status(200).json({  message: "Post supprimé !" });
}


exports.modifyPost = async (req, res, next) => {
  let postId = req.params.id;
  let { contenu, imageUrl } = req.body;
  const posts = await Posts.findById(postId);
    
    if (posts[0].length == 0) {
      return res.status(400).json({ message: "post introuvable"});
      }
      Posts.updatePost(postId, contenu, imageUrl);
      return res.status(200).json({  message: "Post modifié" });
};
  
    