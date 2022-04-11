// package pour créer et vérifier les tokens d'authentification
const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization; //on extrait le token du header authorization
    const decodedToken = jwt.verify(token, process.env.TOKEN_USER);
    const userId = decodedToken.userId;
    const isadmin = decodedToken.isadmin;
    console.log("isadmin: " + isadmin);
    console.log("userId: " + userId);
    req.auth = { userId };
    if (req.body.userId && req.body.userId !== userId) {
      return res.status(401).json({error: "UserId non valable !"})
  } else{
      console.log(decodedToken)
      next();
  }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};