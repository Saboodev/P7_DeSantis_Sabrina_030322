const fs = require('fs');
const Posts = require("../models/Posts")

// Créer un post
exports.createNewPost = async (req, res, next) => {
    try {
        let { contenu, image_url } = req.body;
        let posts = new Posts( contenu, image_url );
      
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
    try {
        let getPostId = req.params.id;
    
        const posts = await Posts.findById(getPostId);
    
        res.status(200).json({ posts });
      } catch (error) {
        next(error);
      }
};

exports.deletePost = async (req, res, next) => {
    res.send("Delete post route");
}

exports.modifyPost = async (req, res, next) => {
    res.send("Modify post route");
} 
  
    