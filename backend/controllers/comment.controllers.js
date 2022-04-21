const fs = require('fs');
const Comments = require("../models/Comments");
const Posts = require("../models/Posts");
const Users = require("../models/Users");

// Créer un commentaire
exports.createComment = async (req, res, next) => {
    try {
      let postId = req.params.id;
      let content = req.body.content;
      let userName = req.body.userName;
               
      let comments = new Comments(content, postId, userName);

      comments = await comments.save();

      res.status(201).json({  message: "Commentaire ajouté" });
    } catch (error) {
      next (error);
    }
};

// Récupérer tous les commentaires
exports.getAllComments = async (req, res, next) => {
    try {
      const comments = await Comments.findAll();
      res.status(200).json({ comments });
      } catch (error) {
        next(error);
      }
};

// Récupérer un commentaire
exports.getCommentById = async (req, res, next) => {
    try {
        let getCommentId = req.params.id;
    
        const comments = await Comments.findById(getCommentId);
    
        res.status(200).json({ comments });
      } catch (error) {
        next(error);
      }
};

// Modifier un commentaire
exports.modifyComment = async (req, res, next) => {
  let commentId = req.params.id;
  let content = req.body.content;
  console.log(content);
  const comments = await Comments.findById(commentId);
    
    if (comments[0].length == 0) {
      return res.status(400).json({ message: "commentaire introuvable"});
      }
      Comments.updateComment(commentId, content);
      return res.status(200).json({  message: "Commentaire modifié" });
};
  
// Supprimer un commentaire
exports.deleteComment = async (req, res, next) => {
  let commentId = req.params.id;
  
  const comments = await Comments.findById(commentId);

  if (comments[0].length == 0) {
    return res.status(400).json({ message: "commentaire introuvable"});
  }
  Comments.destroyComment(commentId);
  return res.status(200).json({  message: "Commentaire supprimé !" });
}



    