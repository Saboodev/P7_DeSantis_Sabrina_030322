const fs = require('fs');
const Likes = require('../models/Likes');
const Posts = require("../models/Posts");
const Users = require("../models/Users");
const Comments = require("../models/Comments");

// Créer un post
exports.createNewPost = async (req, res, next) => {
    try {
      let { contenu, imageUrl, userId, author } = req.body;
      let posts = new Posts( contenu, imageUrl, userId, author );
      posts.imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;

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
      for(post of posts[0]){
        post.contenu = post.contenu.split("").slice(1, -1).join("");
        post.comments = await Comments.findComments(post.postId);
        for(comment of post.comments[0]) {
          comment.content = comment.content.split("").slice(1, -1).join("");
        }
      }
      res.status(200).json({ posts });
      } catch (error) {
        next(error);
      }
};

// Récupérer un post
exports.getPostById = async (req, res, next) => {
    try {
      let postId = req.params.id;
    
      const posts = await Posts.findById(postId);
      posts.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + posts.imageUrl;

    
      res.status(200).json({ posts });
      } catch (error) {
        next(error);
      }
};

// Modifier un post
exports.modifyPost = async (req, res, next) => {
  let postId = req.params.id;
  if (!postId) {
    return res.status(400).json({ message: "Vous ne pouvez pas exécuter cette requête"});
  }

  let { contenu, imageUrl } = req.body;
  const posts = await Posts.findById(postId);
  if (req.auth.userId !== posts.userId) {
    return res.status(400).json({ message: "Vous ne pouvez pas exécuter cette requête"});
  }

  if (posts[0].length == 0) {
    return res.status(404).json({ message: "post introuvable"});
  }

  if (req.file) {
    const filename = posts.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, (error) => {
          if (error) throw error;
    });

    imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  } 

  Posts.updatePost(postId, contenu, imageUrl);
  return res.status(200).json({  message: "Post modifié" });
};


// Supprimer un post
exports.deletePost = async (req, res, next) => {
  
  let postId = req.params.id;
  if (!postId) {
    return res.status(400).json({ message: "Vous ne pouvez pas exécuter cette requête"});
  }
  
  const posts = await Posts.findById(postId);
  if (posts[0].length == 0) {
    return res.status(400).json({ message: "post inexistant"});
  }
  if (posts[0][0].userId === req.auth.userId || req.auth.isadmin == 1) {
    Posts.destroyPost(postId);
    const filename = posts[0][0].imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, (error) => {
          if (error) throw error;
    });
    return res.status(200).json({  message: "Post supprimé !" });
  }else{
    res.status(400).json({
      error: new Error('Requête non valide')
    });
    return false
  }
}

// Liker ou disliker un post
exports.likesAndDislikes = async (req, res, next) => {
  try {
    const postId = req.params;
    
    let likes = await Likes.likeDislike(postId);
    console.log(likes);
    console.log(likes[0][0]);

    if (likes[0][0].length == 0) {
      likes = await Likes.save();
      return res.status(200).json({  message: "J'aime" })
    } else if (likes[0][0].length == -1) {
      Likes.dislike(postId);
      return res.status(200).json({  message: "J'aime plus" })
    } else {
      res.status(404).json({ likes });
    }
  } catch (error) {
    next(error);
  }
}

// Compter le nombre de like
exports.countLikes = async (req, res, next) => {
  try {
    let postId = req.params.id;
  
    const likes = await Likes.totalLike(postId);
  
    res.status(200).json({ likes });
    } catch (error) {
      next(error);
    }
};