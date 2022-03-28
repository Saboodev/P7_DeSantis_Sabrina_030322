const fs = require('fs');
const Comments = require("../models/Comments")

// Créer un post
exports.createComment = async (req, res, next) => {
    try {
        let { contenu, image_url } = req.body;
        let comments = new Comments( contenu, image_url );
      
        comments = await comments.save();
    
        res.status(201).json({ message: "Nouveau commentaire crée"});
      } catch (error) {
        next (error);
      }
};

// Récupérer tous les posts
exports.getAllComments = async (req, res, next) => {
    try {
        const comments = await Comments.findAll();
    
        res.status(200).json({ comments });
      } catch (error) {
        next(error);
      }
};

// Récupérer un user
exports.getCommentById = async (req, res, next) => {
    try {
        let getCommentId = req.params.id;
    
        const comments = await Comments.findById(getCommentId);
    
        res.status(200).json({ comments });
      } catch (error) {
        next(error);
      }
};

exports.deleteComment = async (req, res, next) => {
    res.send("Delete post route");
}

exports.modifyComment = async (req, res, next) => {
    res.send("Modify post route");
} 
  
    