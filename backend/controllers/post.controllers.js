const fs = require('fs');
const Posts = require("../models/Posts");
const Users = require("../models/Users");

// Créer un post
exports.createNewPost = async (req, res, next) => {
    try {
      let { contenu, imageUrl, userId } = req.body;
      let posts = new Posts( contenu, imageUrl, userId );
      posts.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + posts.imageUrl;

      console.log(posts);
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
      posts.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + posts.imageUrl;

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
      posts.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + posts.imageUrl;

    
      res.status(200).json({ posts });
      } catch (error) {
        next(error);
      }
};

// Modifier un post
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

// Supprimer un post
exports.deletePost = async (req, res, next) => {
  
  let postId = req.params.id;
  
  const posts = await Posts.findById(postId);

  if (posts[0].length == 0) {
    return res.status(400).json({ message: "post inexistant"});
  }
  Posts.destroyPost(postId);
  return res.status(200).json({  message: "Post supprimé !" });
}

// Liker ou disliker un post
exports.likesAndDislikes = (req, res) => {

  if (req.body.like === 1) {
      console.log(req.body);
      Posts.updatePost(
          { postId: req.params.id },
          {
              $inc: { likes: req.body.like++ },
              $push: { usersLiked: req.body.userId }
          })

          .then(() => res.status(200).json({ message: 'like +1 !' }))
          .catch(error => res.status(400).json({ error }))

  } else if (req.body.like === -1) {
      Posts.updatePost(
          { postId: req.params.id },
          {
              $inc: { dislikes: (req.body.like++) * -1 },
              $push: { usersDisliked: req.body.userId }
          })

          .then(() => res.status(200).json({ message: 'dislike +1 !' }))
          .catch(error => res.status(400).json({ error }))

  } else {
      Posts.findById({ postId: req.params.id })
          .then(posts => {
              if (posts.usersLiked.includes(req.body.userId)) {
                Posts.updatePost({ _id: req.params.id },
                  {
                      $pull: { usersLiked: req.body.userId },
                      $inc: { likes: -1 }
                  })

                  .then(() => res.status(200).json({ message: 'like -1 !' }))
                  .catch(error => res.status(400).json({ error }))

              } else if (posts.usersDisliked.includes(req.body.userId)) {
                Posts.updatePost({ postId: req.params.id },
                      {
                          $pull: { usersDisliked: req.body.userId },
                          $inc: { dislikes: -1 }
                      })
                      .then(() => res.status(200).json({ message: 'Dislike -1 !' }))
                      .catch(error => res.status(400).json({ error }))
              }
          })
          .catch(error => res.status(400).json({ error }))
  }
}
    